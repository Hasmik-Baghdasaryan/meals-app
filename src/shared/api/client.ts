import { BASE_URL } from "@/shared/constants";

export const toArray = (value) => (Array.isArray(value) ? value : []);

export async function get(path, params = {}, signal) {
  const url = new URL(path, BASE_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
}
