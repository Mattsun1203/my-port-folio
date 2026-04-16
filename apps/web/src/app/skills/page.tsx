import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: '技術スタック・スキルセット',
};

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨' },
      { name: 'Framer Motion', level: 70, icon: '🎬' },
      { name: 'Testing Library', level: 80, icon: '🧪' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75, icon: '🟩' },
      { name: 'NestJS', level: 70, icon: '🐱' },
      { name: 'REST API', level: 80, icon: '🔗' },
      { name: 'PostgreSQL', level: 65, icon: '🐘' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 90, icon: '🐙' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'Figma', level: 75, icon: '🖌️' },
      { name: 'Storybook', level: 80, icon: '📖' },
      { name: 'Vitest / Jest', level: 80, icon: '✅' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="section-title">Skills</h1>
          <p className="section-subtitle">技術スタック</p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <h2 className="mb-6 text-xl font-bold text-slate-900">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map(({ name, level, icon }) => (
                  <div
                    key={name}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{icon}</span>
                        <span className="font-medium text-slate-900">{name}</span>
                      </div>
                      <span className="text-sm font-semibold text-indigo-600">{level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other tools */}
        <div className="mt-16 rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900">その他 / 学習中</h2>
          <div className="flex flex-wrap gap-3">
            {['Go', 'GraphQL', 'AWS', 'Vercel', 'Turborepo', 'pnpm', 'Prisma'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
