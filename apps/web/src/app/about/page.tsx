import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: '自己紹介・プロフィール・強み・趣味',
};

const strengths = [
  {
    icon: '⚡',
    title: 'パフォーマンス意識',
    description:
      'Core Web Vitals を意識した実装を行い、ユーザーが快適に操作できる Web を追求します。',
  },
  {
    icon: '🎨',
    title: 'UI/UX へのこだわり',
    description:
      'デザインと実装の橋渡し役として、細部まで丁寧に実装します。Figma からのコーディングも得意です。',
  },
  {
    icon: '🤝',
    title: 'チーム開発',
    description:
      'コードレビューや設計議論を通じてチーム全体の品質向上に貢献します。',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">自己紹介</p>
        </div>

        {/* Profile */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-xl">
              <div className="flex h-full w-full items-center justify-center text-8xl">
                👤
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900">Your Name</h2>
            <p className="text-indigo-600 font-medium">Frontend Engineer</p>
            <p className="leading-relaxed">
              フロントエンドエンジニアとして、React / Next.js を中心にプロダクト開発に携わっています。
              ユーザー体験を大切にし、保守性の高いコードを書くことを心がけています。
            </p>
            <p className="leading-relaxed">
              TypeScript や Testing Library を用いた堅牢な実装が得意で、
              デザイナーと連携しながら品質の高い UI を実現します。
            </p>

            {/* Meta info */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
              <div>
                <dt className="text-sm text-slate-500">居住地</dt>
                <dd className="font-medium text-slate-900">東京都</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">経験年数</dt>
                <dd className="font-medium text-slate-900">3年以上</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">専門分野</dt>
                <dd className="font-medium text-slate-900">フロントエンド開発</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">対応可能</dt>
                <dd className="font-medium text-slate-900">フルタイム / 副業</dd>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">強み</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">趣味・興味</h2>
          <div className="flex flex-wrap gap-3">
            {['OSS 活動', '技術記事執筆', '登山', '読書', 'コーヒー', 'カメラ'].map((hobby) => (
              <span
                key={hobby}
                className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
