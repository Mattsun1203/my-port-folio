import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: '技術記事一覧',
};

type Article = {
  id: number;
  title: string;
  platform: 'Zenn' | 'Qiita' | 'Note';
  url: string;
  publishedAt: string;
  tags: string[];
  emoji: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Next.js 15 の App Router と Storybook 8 を組み合わせた開発環境構築',
    platform: 'Zenn',
    url: 'https://zenn.dev',
    publishedAt: '2024年 12月',
    tags: ['Next.js', 'Storybook', 'TypeScript'],
    emoji: '📖',
  },
  {
    id: 2,
    title: 'openapi-typescript + openapi-fetch で型安全な API 呼び出しを実現する',
    platform: 'Zenn',
    url: 'https://zenn.dev',
    publishedAt: '2024年 10月',
    tags: ['OpenAPI', 'TypeScript', 'NestJS'],
    emoji: '🔷',
  },
  {
    id: 3,
    title: 'pnpm モノレポ × Turborepo で快適な開発環境を作る',
    platform: 'Qiita',
    url: 'https://qiita.com',
    publishedAt: '2024年 8月',
    tags: ['pnpm', 'Turborepo', 'モノレポ'],
    emoji: '🏗️',
  },
  {
    id: 4,
    title: 'Vitest + Testing Library で Next.js のコンポーネントテストを書く',
    platform: 'Zenn',
    url: 'https://zenn.dev',
    publishedAt: '2024年 6月',
    tags: ['Vitest', 'Testing Library', 'React'],
    emoji: '🧪',
  },
];

const platformColors: Record<Article['platform'], string> = {
  Zenn: 'bg-blue-50 text-blue-700',
  Qiita: 'bg-green-50 text-green-700',
  Note: 'bg-orange-50 text-orange-700',
};

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">技術記事</p>
        </div>

        {/* Article list */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex-shrink-0 text-3xl">{article.emoji}</div>

              <div className="flex-1 min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${platformColors[article.platform]}`}
                  >
                    {article.platform}
                  </span>
                  <span className="text-xs text-slate-400">{article.publishedAt}</span>
                </div>

                <h2 className="mb-2 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-indigo-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* External links */}
        <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center">
          <p className="mb-6 text-slate-600">その他の記事はプラットフォームから確認できます</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Zenn', url: 'https://zenn.dev' },
              { name: 'Qiita', url: 'https://qiita.com' },
            ].map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                {name} で見る →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
