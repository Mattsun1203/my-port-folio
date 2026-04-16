import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Works',
  description: '実績・制作物の一覧',
};

const projects = [
  {
    id: 1,
    title: 'Portfolio Site',
    description:
      'Next.js + NestJS + pnpm モノレポで構築した個人ポートフォリオサイト。Storybook・Vitest・OpenAPI 連携を採用。',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    github: 'https://github.com',
    demo: null,
    emoji: '🌐',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'React + TypeScript で実装したタスク管理アプリ。ドラッグ&ドロップ対応、リアルタイム同期機能あり。',
    tags: ['React', 'TypeScript', 'Zustand', 'React DnD'],
    github: 'https://github.com',
    demo: 'https://example.com',
    emoji: '📋',
  },
  {
    id: 3,
    title: 'E-commerce UI',
    description:
      'Figma デザインからの実装。アクセシビリティ対応・レスポンシブデザイン・アニメーションを含む。',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Storybook'],
    github: null,
    demo: 'https://example.com',
    emoji: '🛍️',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      '天気予報 API と連携したダッシュボード。チャートライブラリを使用したデータ可視化。',
    tags: ['React', 'TypeScript', 'Recharts', 'SWR'],
    github: 'https://github.com',
    demo: 'https://example.com',
    emoji: '🌤️',
  },
];

export default function WorksPage() {
  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="section-title">Works</h1>
          <p className="section-subtitle">実績・制作物</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Thumbnail area */}
              <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-6xl">
                {project.emoji}
              </div>

              {/* Content */}
              <h2 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    GitHub
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                  >
                    Demo →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
