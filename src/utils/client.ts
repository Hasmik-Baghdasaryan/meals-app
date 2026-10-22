import { BASE_URL } from "@/constants";

// Generic helper to ensure a value is always returned as an array
export const toArray = <T>(value: T | T[] | undefined | null): T[] => {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
};

// Strongly typed query params object
type QueryParams = Record<string, string | number | boolean | null | undefined>;

export async function get<T = unknown>(
  path: string,
  params: QueryParams = {},
  signal?: AbortSignal,
): Promise<T> {
  const url = new URL(path, BASE_URL);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value)); // Safely converted to string
    }
  });

  const response = await fetch(url.toString(), { signal });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}
