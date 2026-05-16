import { ArrowRight, Building2, ChartColumnBig, MessageCircle, Network, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

function Stat(props: Readonly<{ label: string; value: string }>) {
  const { label, value } = props
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold tracking-[0.11em] text-outline">{label}</p>
      <p className="text-[15px] font-semibold tracking-[-0.01em] text-on-surface">{value}</p>
    </div>
  )
}

export default function Works() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-5 py-[96px] pb-56 md:px-6">
        <header className="mb-[68px] max-w-4xl space-y-[18px]">
          <h1 className="text-[clamp(40px,4.65vw,64px)] font-extrabold tracking-[-0.02em] text-on-surface">精选作品</h1>
          <p className="text-[18px] leading-relaxed text-on-surface-variant">
            技术与架构的实践合集——以矢量与几何构成画面，不使用照片素材，与原型风格一致。
          </p>
        </header>

        <div className="flex flex-col gap-[28px] md:grid md:grid-cols-12">
          {/* 1 */}
          <article className="overflow-hidden rounded-xl border border-outline-variant/23 bg-surface-container-lowest shadow-tinted-card transition-colors duration-300 hover-lift-intense hover:border-primary/42 md:col-span-8 md:flex">
            <div className="wireframe-pattern inline-flex min-h-[320px] flex-1 items-center justify-center p-12 md:w-1/2">
              <div className="relative flex aspect-video w-full max-w-[472px] items-center justify-center border-2 border-outline-variant bg-surface-container">
                <div aria-hidden className="absolute inset-[14%] diagonal-stripes opacity-45" />
                <Building2 className="relative z-[1]" aria-hidden strokeWidth={1.4} color="rgb(53 37 205)" size={116} />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-[clamp(22px,3vw,32px)] md:w-1/2">
              <div>
                <div className="mb-7 flex gap-4">
                  <Chip label="企业级" />
                  <Chip label="SaaS" tinted />
                </div>
                <h2 className="mb-6 text-[20px] font-semibold tracking-[-0.01em] text-on-surface">全渠道核心系统</h2>
                <p className="text-[16px] leading-relaxed text-on-surface-variant">
                  高性能金融中间层，连接遗留核心与面向用户的现代 API 体验。
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-14 border-t border-outline-variant/26 pt-[28px]">
                <Stat label="角色" value="首席架构师" />
                <Stat label="年份" value="2023" />
              </div>
            </div>
          </article>

          {/* 2 */}
          <article className="overflow-hidden rounded-xl border border-outline-variant/22 bg-surface-container-lowest shadow-tinted-card hover-lift-intense hover:border-secondary/45 md:col-span-4 md:flex md:flex-col">
            <div className="flex h-[200px] items-center justify-center diagonal-stripes p-10 md:h-auto md:min-h-[190px]">
              <span className="flex size-[108px] items-center justify-center rounded-full border-[4px] border-white shadow-xl shadow-primary/45 bg-surface">
                <Shield className="text-secondary" aria-hidden strokeWidth={1.7} size={46} />
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-[clamp(22px,3vw,32px)] pt-[13px]">
              <div>
                <div className="mb-7">
                  <Chip label="网络安全" secondary />
                </div>
                <h2 className="mb-[18px] text-[20px] font-semibold tracking-[-0.01em] text-on-surface">哨兵身份协议</h2>
                <p className="text-[16px] leading-relaxed text-on-surface-variant">
                  面向分布式团队的零信任身份与访问管理框架。
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-14 border-t border-outline-variant/26 pt-[28px]">
                <Stat label="角色" value="产品设计师" />
                <Stat label="年份" value="2024" />
              </div>
            </div>
          </article>

          {/* 3 */}
          <article className="overflow-hidden rounded-xl border border-outline-variant/22 bg-surface-container-lowest shadow-tinted-card hover-lift-intense hover:border-primary/40 md:col-span-4 md:flex md:flex-col">
            <div className="flex flex-col items-center justify-center gap-[20px] bg-surface-container-highest px-[36px] py-[54px]">
              <span aria-hidden className="flex items-end gap-2 pb-6">
                <span className="h-[54px] w-[12px] rounded-full bg-primary" />
                <span className="h-[74px] w-[12px] rounded-full bg-primary/45" />
                <span className="h-[34px] w-[12px] rounded-full bg-primary" />
              </span>

              <ChartColumnBig aria-hidden strokeWidth={1.45} className="text-outline-variant opacity-94" size={56} />
            </div>

            <div className="flex flex-1 flex-col p-[clamp(22px,3vw,34px)]">
              <Chip label="大数据" className="mb-[22px]" />
              <h2 className="mb-[16px] text-[20px] font-semibold tracking-[-0.01em] text-on-surface">数据可视化引擎</h2>
              <p className="text-[16px] leading-relaxed text-on-surface-variant">
                物流监控场景的实时分析与可视化看板。
              </p>
              <div className="mt-auto flex justify-between gap-8 border-t border-outline-variant/25 pt-[24px] text-[15px] text-on-surface">
                <span>系统顾问</span>
                <span className="font-semibold text-outline">2022</span>
              </div>
            </div>
          </article>

          {/* 4 reversed */}
          <article className="overflow-hidden rounded-xl border border-outline-variant/21 bg-surface-container-lowest shadow-tinted-card transition-colors duration-300 hover-lift-intense hover:border-primary/38 md:col-span-8 md:flex md:flex-row-reverse">
            <div className="wireframe-pattern inline-flex min-h-[310px] flex-1 items-center justify-center px-16 py-[58px] md:w-1/2">
              <div className="flex h-[220px] w-full max-w-[470px] items-center justify-center border-2 border-dashed border-primary/30 rounded-xl">
                <div className="grid w-[78%] grid-cols-4 gap-6">
                  <span className="h-12 rounded-lg bg-primary/15" aria-hidden />
                  <span className="h-12 rounded-lg bg-primary/38" aria-hidden />
                  <span className="h-12 rounded-lg bg-primary/22" aria-hidden />
                  <span className="h-12 rounded-lg bg-primary/48" aria-hidden />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-[clamp(22px,3vw,34px)] md:w-1/2">
              <div>
                <div className="mb-8">
                  <Chip label="基础设施" />
                </div>
                <h2 className="mb-[22px] text-[20px] font-semibold tracking-[-0.01em] text-on-surface">云编排中枢</h2>
                <p className="text-[16px] leading-relaxed text-on-surface-variant">
                  自动化部署流水线与容器编排，支撑可横向扩展的应用交付。
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-14 border-t border-outline-variant/26 pt-[28px]">
                <Stat label="角色" value="运维工程师" />
                <Stat label="年份" value="2023" />
              </div>
            </div>
          </article>

          {/* Banner */}
          <article className="flex flex-col gap-[34px] overflow-hidden rounded-xl border border-outline-variant/22 bg-surface-container-lowest p-[clamp(22px,3vw,32px)] shadow-tinted-card hover-lift-intense hover:border-primary/42 md:col-span-12 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-12 xl:flex-nowrap">
            <span className="mb-0 inline-flex size-[88px] flex-shrink-0 items-center justify-center rounded-xl bg-primary-container shadow-lg">
              <Network className="text-on-primary-container" aria-hidden strokeWidth={1.5} size={44} />
            </span>

            <div className="flex-1 pb-0 md:py-10">
              <h2 className="text-[21px] font-semibold tracking-[-0.01em] text-on-surface">遗留系统集成框架</h2>
              <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-on-surface-variant">
                在传统主机与 React 前端之间架设 GraphQL 抽象层，平滑迁移与联调。
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-[42px] text-left md:flex md:flex-none md:gap-14">
              <div>
                <Stat label="领域" value="保险" />
              </div>
              <div>
                <Stat label="年份" value="2021" />
              </div>
            </dl>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-primary px-[24px] py-[17px] text-[13px] font-semibold tracking-wide text-white shadow-xl shadow-primary/25 transition-[transform] duration-200 hover:-translate-y-[2px] md:w-auto md:shrink-0"
            >
              查看案例详情
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-px" aria-hidden strokeWidth={1.8} />
            </Link>
          </article>
        </div>
      </div>

      <Fab />
    </>
  )
}

function Chip(props: Readonly<{ label: string; secondary?: boolean; tinted?: boolean; className?: string }>) {
  const { label, secondary, tinted, className } = props
  return (
    <span
      className={[
        'inline-flex rounded-full px-4 py-[5px] text-[11px] font-semibold tracking-wide',
        secondary
          ? 'bg-secondary/[0.06] text-secondary'
          : tinted
            ? 'bg-primary/[0.06] text-primary'
            : 'bg-primary/[0.08] text-primary',
        className ?? '',
      ].join(' ')}
    >
      {label}
    </span>
  )
}

function Fab() {
  return (
    <Link
      aria-label="联系咨询项目"
      to="/contact"
      className="group fixed bottom-[36px] right-[26px] z-40 rounded-full bg-primary-container px-[18px] py-[17px] text-on-primary-container shadow-2xl shadow-primary/38 transition-[transform] duration-[480ms] md:bottom-14 md:right-14"
    >
      <span className="flex items-center gap-5">
        <MessageCircle aria-hidden strokeWidth={1.95} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-semibold tracking-wide transition-[max-width,padding,margin] duration-500 motion-reduce:max-w-none motion-reduce:text-left group-hover:max-w-[15rem] group-hover:translate-x-[2px]">
          咨询项目
        </span>
      </span>
    </Link>
  )
}
