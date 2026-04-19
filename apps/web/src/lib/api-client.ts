import type { paths } from 'openapi';
import createClient from 'openapi-fetch';

export const apiClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
  // Use a wrapper so MSW (and other fetch interceptors) can patch globalThis.fetch at test time.
  fetch: (...args) => fetch(...args),
});
