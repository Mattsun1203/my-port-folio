import { http, HttpResponse } from 'msw';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const handlers = [
  http.post(`${BASE_URL}/contact`, () => {
    return HttpResponse.json({ success: true });
  }),
];
