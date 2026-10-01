#!/usr/bin/env bash
# One-time bootstrap: obtains the first Let's Encrypt certificate for coxbit.org
# and www.coxbit.org, then lets the `certbot` service in docker-compose.yml
# keep it renewed. Re-running this script replaces the existing certificate.
set -euo pipefail

domains=(coxbit.org www.coxbit.org)
rsa_key_size=4096
data_path="./certbot"
email="${LETSENCRYPT_EMAIL:-}"
staging="${STAGING:-0}"

if [ -z "$email" ]; then
  echo "Set LETSENCRYPT_EMAIL before running this script, e.g.:" >&2
  echo "  LETSENCRYPT_EMAIL=admin@coxbit.org ./init-letsencrypt.sh" >&2
  exit 1
fi

if [ -d "$data_path/conf/live/${domains[0]}" ]; then
  read -r -p "Existing certificate data found for ${domains[0]}. Replace it? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit 0
  fi
fi

echo "### Creating a dummy certificate for ${domains[0]} so nginx can start ..."
cert_path="/etc/letsencrypt/live/${domains[0]}"
mkdir -p "$data_path/conf/live/${domains[0]}"
sudo docker compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1 \
    -keyout '$cert_path/privkey.pem' \
    -out '$cert_path/fullchain.pem' \
    -subj '/CN=localhost'" certbot

echo "### Starting nginx ..."
sudo docker compose up --force-recreate -d nginx

echo "### Deleting dummy certificate for ${domains[0]} ..."
sudo docker compose run --rm --entrypoint "\
  rm -rf /etc/letsencrypt/live/${domains[0]} && \
  rm -rf /etc/letsencrypt/archive/${domains[0]} && \
  rm -rf /etc/letsencrypt/renewal/${domains[0]}.conf" certbot

echo "### Requesting the real Let's Encrypt certificate for ${domains[*]} ..."
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

staging_arg=""
if [ "$staging" != "0" ]; then
  staging_arg="--staging"
fi

sudo docker compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $domain_args \
    --email $email \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --non-interactive --force-renewal" certbot

echo "### Reloading nginx with the new certificate ..."
sudo docker compose exec nginx nginx -s reload

echo "### Done. coxbit.org is now served over HTTPS."
