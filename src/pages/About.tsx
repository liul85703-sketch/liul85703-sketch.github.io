import { Building2, Code2, Landmark, Radar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const milestones = [
  {
    role: '资深系统架构师',
    period: '2021 — 至今',
    text: '主导企业级平台的数字化演进，服务全球市场与复杂业务场景。',
  },
  {
    role: '首席产品设计师',
    period: '2018 — 2021',
    text: '为金融分析类产品建立统一的视觉语言与体验标准。',
  },
  {
    role: '全栈工程师',
    period: '2015 — 2018',
    text: '构建高并发 SaaS 所需的服务端基础设施与动态前端界面。',
  },
]

export default function About() {
  return (
    <div className="bg-background pb-24 text-on-surface">
      <main className="mx-auto max-w-[1200px] px-5 md:px-6">
        <section className="flex flex-col items-center gap-16 py-24 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary-container/12 px-4 py-[9px] text-[12px] font-semibold text-primary backdrop-blur-sm">
              <Landmark aria-hidden size={17} strokeWidth={2} />
              <span className="tracking-wide">至今的故事</span>
            </div>

            <h1 className="text-[clamp(44px,5vw,64px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-on-surface">
              以<span className="text-primary">精密</span>与目标感，构建数字系统。
            </h1>

            <p className="max-w-2xl text-[18px] leading-relaxed text-on-surface-variant">
              我习惯在复杂工程与以人为本的设计之间搭桥，在「技术噪音」里持续寻找清晰与可落地的路径。
            </p>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <Link
                to="/works"
                className="rounded-full px-10 py-4 text-center text-[13px] font-semibold tracking-wide text-white shadow-xl shadow-primary/25 transition-transform hover:-translate-y-1 hover:shadow-primary/35 btn-gradient sm:inline-flex sm:justify-center"
              >
                查看作品
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-full border border-outline-variant bg-surface-container-lowest px-10 py-4 text-[13px] font-semibold tracking-wide text-on-surface transition-colors hover:bg-surface-container-low"
              >
                与我联系
              </Link>
            </div>
          </div>

          <div className="relative flex w-full max-w-[540px] flex-1 md:aspect-square">
            <div
              aria-hidden
              className="absolute inset-6 rotate-6 rounded-[40px] bg-linear-to-br from-primary via-secondary to-primary opacity-[0.095]"
            />

            <div className="absolute inset-8 -rotate-3 rounded-[40px] border-2 border-primary/20 shadow-lg shadow-primary/10" />

            <div className="relative flex h-[min(86vw,480px)] w-full items-center justify-center overflow-hidden rounded-[40px] border border-outline-variant/30 bg-[rgb(255_255_255/0.7)] shadow-2xl shadow-indigo-900/10 backdrop-blur-[14px] md:h-full md:rounded-[42px]">
              <div className="abstract-dots-about pointer-events-none absolute inset-6 opacity-[0.35]" />

              <div className="relative z-[2] rounded-full bg-white p-14 shadow-xl">
                <Building2 className="size-[clamp(112px,20vw,120px)] text-primary" aria-hidden strokeWidth={1.4} />
              </div>

              <div aria-hidden className="absolute left-[15%] top-[12%] size-14 rounded-full bg-secondary/85 blur-[2px]" />
              <div aria-hidden className="absolute bottom-[15%] right-[12%] size-28 rotate-[12deg] rounded-lg border-[4px] border-secondary/30" />
            </div>
          </div>
        </section>

        <section className="pb-24 pt-12">
          <div className="mb-14 max-w-xl">
            <h2 className="text-[32px] font-semibold leading-snug tracking-[-0.01em] text-on-surface">核心能力</h2>
            <p className="mt-4 text-[16px] text-on-surface-variant">
              构成我专业画像的几根支柱。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <article className="glass-panel-about flex gap-10 rounded-xl p-[clamp(20px,3vw,32px)] transition-transform hover:-translate-y-1 hover:shadow-tinted-card md:col-span-8">
              <div className="flex flex-1 flex-col gap-4">
                <Radar className="size-12 text-primary" aria-hidden strokeWidth={1.6} />
                <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-on-surface">战略性系统架构</h3>
                <p className="max-w-xl text-[16px] leading-relaxed text-on-surface-variant">
                  设计可随组织演进而扩展的框架体系，在复杂企业环境中保持长期可维护与高性能。
                </p>
              </div>
              <div className="hidden h-36 w-36 shrink-0 place-items-center rounded-full border border-primary/12 bg-primary-container/[0.05] lg:grid lg:justify-self-end">
                <div className="size-24 rounded-full border-2 border-dashed border-primary/35 motion-safe:animate-[spin_14s_linear_infinite]" />
              </div>
            </article>

            <article className="rounded-xl bg-linear-to-br from-primary via-primary to-secondary p-[clamp(22px,3vw,32px)] text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1 hover:shadow-primary/35 md:col-span-4">
              <Users className="size-11 text-white/90" aria-hidden strokeWidth={1.85} />
              <div className="mt-10 space-y-2">
                <h3 className="text-[20px] font-semibold leading-snug">协同与领导</h3>
                <p className="text-[16px] leading-relaxed opacity-90">
                  以透明沟通与共情引导，推动团队保持高水准产出。
                </p>
              </div>
            </article>

            <article className="glass-panel-about rounded-xl border-l-4 border-l-secondary pl-[clamp(20px,3vw,32px)] pr-[clamp(20px,3vw,28px)] py-[clamp(20px,3vw,30px)] transition-transform hover:-translate-y-1 md:col-span-4">
              <Code2 aria-hidden size={43} strokeWidth={1.5} className="text-secondary" />
              <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.01em] text-on-surface">工程精度</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-on-surface-variant">
                编写清晰、模块化的代码，让后续迭代与协作成本更低。
              </p>
            </article>

            <article className="glass-panel-about relative overflow-hidden rounded-xl p-[clamp(20px,3vw,32px)] transition-transform hover:-translate-y-1 hover:shadow-tinted-card md:col-span-8">
              <div className="relative z-[1] flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
                <div className="max-w-xl space-y-3">
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-on-surface">产品愿景与策略</h3>
                  <p className="text-[16px] leading-relaxed text-on-surface-variant">
                    把业务目标转译为可执行的产品路线，让终端用户与利益相关方都能感知价值。
                  </p>
                </div>

                <div className="relative flex h-[96px] w-[184px] items-center justify-center overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container md:justify-self-end">
                  <span aria-hidden className="pointer-events-none absolute left-6 right-6 top-[45%] h-px rounded-full bg-primary/25" />
                  <span aria-hidden className="relative inline-flex size-[10px] rounded-full bg-primary" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-4xl pb-14 text-center">
            <h2 className="text-[32px] font-semibold leading-snug tracking-[-0.01em] text-on-surface">职业时间线</h2>
            <p className="mt-4 text-[16px] text-on-surface-variant">持续成长与影响的片段记录。</p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <ol className="space-y-10 border-l border-outline-variant/35 pl-10 md:pl-14">
              {milestones.map((milestone, index) => (
                <li key={`${milestone.role}-${String(index)}`} className="relative pl-10">
                  <span
                    aria-hidden
                    className="absolute left-[-61px] top-[18px] flex size-[38px] items-center justify-center rounded-full border-4 border-white bg-primary shadow-md md:left-[-75px]"
                  >
                    <span className="size-[11px] rounded-full bg-white" />
                  </span>

                  <div className="rounded-xl border border-outline-variant/22 bg-surface-container-lowest px-8 py-7 shadow-tinted-card hover-lift-intense hover:border-primary/35">
                    <h4 className="text-[19px] font-semibold tracking-[-0.01em] text-on-surface">{milestone.role}</h4>
                    <p className="mt-3 text-[12px] font-semibold tracking-[0.09em] text-primary">{milestone.period}</p>
                    <p className="mt-4 text-[16px] leading-relaxed text-on-surface-variant">{milestone.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  )
}
