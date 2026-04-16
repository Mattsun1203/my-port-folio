import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career',
  description: '職務経歴・学歴',
};

type TimelineItem = {
  period: string;
  type: 'work' | 'education';
  organization: string;
  role: string;
  description: string;
  tags?: string[];
};

const timeline: TimelineItem[] = [
  {
    period: '2022年 4月 — 現在',
    type: 'work',
    organization: '株式会社 Example Tech',
    role: 'フロントエンドエンジニア',
    description:
      'React / Next.js を用いた SaaS プロダクトのフロントエンド開発。UI コンポーネントの設計・実装、パフォーマンス改善、Storybook によるコンポーネント管理を担当。',
    tags: ['Next.js', 'TypeScript', 'Storybook', 'Figma'],
  },
  {
    period: '2021年 4月 — 2022年 3月',
    type: 'work',
    organization: '株式会社 Web Studio',
    role: 'Web エンジニア（フロント寄り）',
    description:
      'コーポレートサイトやランディングページの実装。HTML / CSS / JavaScript から React まで幅広く対応。',
    tags: ['React', 'JavaScript', 'CSS', 'WordPress'],
  },
  {
    period: '2017年 4月 — 2021年 3月',
    type: 'education',
    organization: '◯◯大学 情報学部',
    role: '情報科学専攻',
    description:
      'アルゴリズム・データ構造・Web 技術を専攻。卒業研究では機械学習を用いた画像分類システムを開発。',
    tags: ['Python', '機械学習', 'アルゴリズム'],
  },
];

export default function CareerPage() {
  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="section-title">Career</h1>
          <p className="section-subtitle">職務経歴・学歴</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-slate-200 sm:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: timeline items have no unique id
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 z-10 h-4 w-4 rounded-full border-2 border-white shadow sm:left-1/2 sm:-translate-x-1/2 ${
                    item.type === 'work' ? 'bg-indigo-500' : 'bg-purple-500'
                  }`}
                />

                {/* Card */}
                <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    {/* Badge */}
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        item.type === 'work'
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {item.type === 'work' ? '職歴' : '学歴'}
                    </span>

                    <p className="mb-1 text-sm text-slate-500">{item.period}</p>
                    <h2 className="text-lg font-bold text-slate-900">{item.organization}</h2>
                    <p className="mb-3 font-medium text-indigo-600">{item.role}</p>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
