import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio — Frontend Engineer',
  description: 'フロントエンドエンジニアのポートフォリオサイトです。',
};

export default function HeroPage() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4">
      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
          Frontend Engineer
        </span>

        {/* Name */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Your Name
        </h1>

        {/* Tagline */}
        <p className="mb-10 text-xl text-slate-600 sm:text-2xl">
          モダンな UI と快適な UX を追求する
          <br className="hidden sm:block" />
          フロントエンドエンジニアです。
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/works"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            実績を見る
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-transparent px-7 py-3.5 text-base font-medium text-indigo-600 transition-colors hover:bg-indigo-50 active:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex animate-bounce justify-center">
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
