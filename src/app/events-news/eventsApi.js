import { events as staticEvents, featuredEvent as staticFeaturedEvent } from "./eventsData";

const DEFAULT_ADMIN_API_URL = "http://localhost:3001/api/public/content";

function getAdminApiUrl() {
  return process.env.COXBIT_ADMIN_API_URL || DEFAULT_ADMIN_API_URL;
}

function formatDate(date, endDate) {
  if (!date) return "";

  const start = new Date(date);
  const startLabel = start.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (!endDate || endDate === date) return startLabel;

  const end = new Date(endDate);
  const endLabel = end.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return `${startLabel} - ${endLabel}`;
}

export function normalizeEvent(event) {
  const images = event.images?.length ? event.images : event.image ? [event.image] : [];

  return {
    ...event,
    date: event.dateLabel || formatDate(event.date, event.endDate),
    images,
    content:
      event.content ||
      (event.description ? `<p>${event.description}</p>` : "<p>Details will be updated soon.</p>"),
  };
}

export function getStaticEventsContent() {
  return {
    events: staticEvents.map((event) => ({ ...event, status: "completed" })),
    upcoming: [{ ...staticFeaturedEvent, status: "upcoming" }],
    highlights: [],
    images: [],
  };
}

export async function getEventsContent() {
  try {
    const response = await fetch(getAdminApiUrl(), { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load admin events.");

    const data = await response.json();
    return {
      events: (data.events || []).map(normalizeEvent),
      upcoming: (data.upcoming || []).map(normalizeEvent),
      highlights: data.highlights || [],
      images: data.images || [],
    };
  } catch {
    return getStaticEventsContent();
  }
}

export async function getEventBySlugFromApi(slug) {
  const data = await getEventsContent();
  return [...data.upcoming, ...data.events].find((event) => event.slug === slug);
}
