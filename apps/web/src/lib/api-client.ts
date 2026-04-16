import type { paths } from 'openapi';
import createClient from 'openapi-fetch';

export const apiClient = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
});
