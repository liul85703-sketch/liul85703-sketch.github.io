import {
  ArrowDown,
  Bolt,
  Grid3x3,
  Layers,
  PenLine,
  Rocket,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Aurora from '../components/Aurora'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-surface pb-24">
      {/* Aurora 渐变背景 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[600px] w-full max-md:h-[520px]"
      >
        <div className="relative h-full w-full">
          <Aurora
            colorStops={['#7cff67', '#B497CF', '#5227FF']}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-120px] top-[120px] z-[2] h-96 w-96 rounded-full bg-primary blur-blob" />
      <div className="pointer-events-none absolute right-[-160px] top-[35%] z-[2] h-[460px] w-[460px] rounded-full bg-secondary blur-blob" />

      {/* 首屏 */}
      <section className="relative z-10 mx-auto flex min-h-[820px] max-w-[1200px] flex-col items-center gap-16 px-5 py-24 md:flex-row md:gap-14 md:px-6 lg:py-[6.75rem]">
        <div className="relative z-10 flex flex-1 flex-col gap-10">
          <h1 className="max-w-xl text-[40px] font-extrabold leading-[1.15] tracking-[-0.02em] text-on-surface md:text-[64px] md:leading-[1.1]">
            她就在这里，<span className="gradient-word">JINNY</span>
          </h1>
          <p className="max-w-lg text-[18px] leading-[1.6] text-on-surface-variant">
            以精致的设计与扎实的工程，塑造值得信赖的数字体验。企业级的严谨与创意的灵动在此交汇。
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex transform flex-col items-center rounded-full px-10 py-[18px] text-center btn-gradient transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-[1px]"
            >
              <span className="text-[13px] font-semibold tracking-wide text-white">联系我</span>
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-lowest/65 px-9 py-[18px] text-[13px] font-semibold tracking-wide text-on-surface backdrop-blur-sm transition-colors duration-200 hover:bg-surface-container-low"
            >
              查看作品集
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex w-full flex-1 items-center justify-center">
          <div className="group/iso relative aspect-square w-full max-w-[500px]">
            <div className="relative h-full">
              <div className="isometric-shell absolute inset-0 rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-10 shadow-2xl shadow-indigo-600/10 md:p-12">
                <div className="flex h-full w-full flex-col gap-6 rounded-2xl border border-outline-variant/20 bg-surface-container p-6 md:p-8">
                  <div className="h-6 w-[55%] rounded-full bg-primary/20" />
                  <div className="h-6 w-[75%] rounded-full bg-primary/10" />

                  <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-highest">
                    <div className="grid w-full grid-cols-3 gap-4 px-4 py-4">
                      {[Layers, PenLine, Terminal].map((Icon) => (
                        <div
                          key={Icon.name}
                          className="flex aspect-square items-center justify-center rounded-lg border border-indigo-500/20 bg-linear-to-br from-primary/[0.08] to-secondary/[0.12]"
                        >
                          <Icon className="size-12 text-primary" strokeWidth={1.85} aria-hidden />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="h-4 w-1/3 rounded-full bg-secondary/10" />
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary" />
                  </div>
                </div>
              </div>

              <div className="absolute right-[-10%] top-[-8%] z-20 rotate-12 rounded-2xl border border-outline-variant/25 bg-surface p-6 shadow-xl">
                <Rocket className="size-14 text-primary" strokeWidth={1.85} aria-hidden />
              </div>

              <div className="absolute bottom-[-6%] left-[-5%] z-20 grid size-[128px] -rotate-6 place-items-center overflow-hidden rounded-full border border-outline-variant/25 bg-surface shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3525cd_0%,_transparent_70%)] opacity-35" />
                <Sparkles className="relative z-10 size-14 text-secondary" strokeWidth={1.6} aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 导流条 */}
      <section className="relative border-y border-outline-variant/25 bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 py-11 md:flex-row md:justify-between md:gap-12 md:px-6">
          <div className="flex flex-col gap-9 sm:flex-row sm:items-center">
            <div className="grid size-16 place-items-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/[0.08] to-secondary/[0.1] shadow-sm">
              <div className="grid h-full w-full grid-cols-4 grid-rows-4 opacity-[0.52]">
                <div className="bg-primary/25" />
                <div />
                <div className="bg-primary/25" />
                <div />
                <div />
                <div className="bg-primary/25" />
                <div />
                <div className="bg-primary/25" />
                <div className="bg-primary/25" />
                <div />
                <div className="bg-primary/25" />
                <div />
                <div />
                <div className="bg-primary/25" />
                <div />
                <div className="bg-primary/25" />
              </div>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold leading-snug text-on-surface">精选作品</h3>
              <p className="mt-2 text-[12px] font-medium tracking-[0.2em] text-on-surface-variant">
                案例与实验
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="h-1 w-14 rounded-full bg-outline-variant/30" />
            <div className="h-1 w-7 rounded-full bg-primary" />
            <div className="h-1 w-14 rounded-full bg-outline-variant/30" />
          </div>

          <Link
            to="/works"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-primary transition-colors duration-200"
          >
            <span className="transition-[margin] duration-200 group-hover:mr-2">浏览作品集</span>
            <ArrowDown className="size-5 shrink-0" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 功能预告双栏 */}
      <section className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
          <div className="group flex flex-col justify-between rounded-[2rem] border border-outline-variant/15 bg-surface-container-low p-8 shadow-sm transition-colors duration-200 hover:border-primary/35 md:col-span-8 md:p-10">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary/[0.08] px-3 py-[5px] text-[12px] font-medium tracking-wide text-primary">
                产品设计
              </span>
              <h2 className="max-w-xl text-[32px] font-semibold leading-tight tracking-[-0.01em] text-on-surface">
                企业级系统与可扩展架构
              </h2>
            </div>
            <div className="relative mt-12 min-h-[12rem] overflow-hidden rounded-[1.35rem] bg-surface-container-highest md:mt-14">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: 'radial-gradient(#3525cd 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute bottom-0 right-0 p-10">
                <Grid3x3 className="size-[88px] text-primary opacity-35" strokeWidth={1.5} aria-hidden />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] bg-linear-to-br from-primary to-secondary p-8 text-white shadow-[0_28px_60px_-26px_rgb(53_37_205/0.55)] md:col-span-4 md:p-9">
            <div className="mb-10 flex size-[56px] items-center justify-center rounded-2xl border border-white/15 bg-white/20 backdrop-blur-md">
              <Bolt className="size-9 text-white" strokeWidth={1.95} aria-hidden />
            </div>
            <div>
              <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.01em]">精工构建</h3>
              <p className="mt-5 text-[16px] leading-relaxed opacity-82">
                每一个像素都经过精密排布，在观感与易用之间取得平衡。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
