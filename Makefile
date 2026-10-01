COMPOSE := docker compose

.PHONY: help build up down restart logs logs-app logs-mongo ps clean shell-app shell-mongo

help:
	@echo "make build        - build the app image"
	@echo "make up           - build (if needed) and start app + mongodb"
	@echo "make down         - stop and remove containers"
	@echo "make restart      - restart all services"
	@echo "make logs         - follow logs for all services"
	@echo "make logs-app     - follow app logs"
	@echo "make logs-mongo   - follow mongodb logs"
	@echo "make ps           - show running services"
	@echo "make shell-app    - open a shell in the app container"
	@echo "make shell-mongo  - open a mongo shell"
	@echo "make clean        - stop containers and remove volumes (DELETES DB DATA)"

build:
	$(COMPOSE) build

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) restart

logs:
	$(COMPOSE) logs -f

logs-app:
	$(COMPOSE) logs -f app

logs-mongo:
	$(COMPOSE) logs -f mongo

ps:
	$(COMPOSE) ps

shell-app:
	$(COMPOSE) exec app sh

shell-mongo:
	$(COMPOSE) exec mongo mongo

clean:
	$(COMPOSE) down -v
