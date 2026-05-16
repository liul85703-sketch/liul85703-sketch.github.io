import type { FormEvent } from 'react'
import { BookMarked, Phone, HelpCircle as SupportIcon, Send, MessageCircle } from 'lucide-react'

const quickContacts = [
  {
    label: '微信',
    value: '你的微信号',
    Icon: MessageCircle,
  },
  {
    label: '电话',
    value: '+86 请填写号码',
    Icon: Phone,
  },
  {
    label: '小红书',
    value: '@你的账号',
    Icon: BookMarked,
  },
] as const

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="pb-28">
      <div className="mx-auto max-w-[1200px] px-5 pb-28 pt-[112px] md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <aside className="flex flex-col items-center gap-8 text-center lg:col-span-5 lg:items-start lg:text-left">
            <div className="group/contact relative flex h-[min(340px,70vw)] w-[min(292px,80vw)] items-center justify-center overflow-hidden rounded-[40px] bg-primary indigo-contact-shadow lg:h-[300px] lg:w-[246px]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[10%] abstract-chevrons opacity-15 transition-[transform] duration-[900ms] group-hover/contact:translate-y-[2px]"
              />
              <span className="relative z-[1] text-[clamp(118px,32vw,150px)] font-extrabold leading-none tracking-[-0.08em] text-white">
                J
              </span>
              <span
                aria-hidden
                className="absolute bottom-7 right-7 inline-flex size-16 rounded-full border-[4px] border-white/20"
              />
            </div>

            <header className="max-w-xl">
              <h1 className="text-[clamp(40px,4.5vw,44px)] font-extrabold leading-snug tracking-[-0.02em] text-on-surface">
                欢迎联系。
              </h1>
              <p className="mt-4 text-[18px] leading-relaxed text-on-surface-variant">
                兼具企业级的严谨与当代创意的表达。合作、咨询或投稿件，都十分期待。
              </p>
            </header>
          </aside>

          <div className="space-y-9 lg:col-span-7">
            <section className="rounded-xl border border-outline-variant/22 bg-surface-container-lowest p-[clamp(20px,3vw,32px)] indigo-contact-shadow">
              <h2 className="mb-6 flex items-center gap-3 text-[20px] font-semibold tracking-[-0.01em] text-on-surface">
                <SupportIcon className="size-6 shrink-0 text-primary" aria-hidden strokeWidth={1.8} />
                快速联系
              </h2>
              <div className="flex flex-wrap gap-4">
                {quickContacts.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="inline-flex max-w-[100%] items-center gap-[14px] rounded-full border border-primary-container/20 bg-primary/[0.05] px-6 py-3 transition-colors duration-300 hover:border-primary"
                  >
                    <Icon className="size-5 shrink-0 text-primary" aria-hidden strokeWidth={1.8} />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-wide text-primary">{label}</p>
                      <p className="truncate text-[16px] font-semibold tracking-[-0.01em] text-on-surface">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant/22 bg-surface-container-lowest p-[clamp(20px,3vw,32px)] indigo-contact-shadow">
              <form action="#" method="post" noValidate className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-[13px] font-semibold tracking-wide text-on-surface-variant" htmlFor="name">
                      姓名
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="请输入姓名"
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-[16px] text-on-surface outline-none transition-[box-shadow] focus:border-primary focus:ring-[3px] focus:ring-primary/20"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-semibold tracking-wide text-on-surface-variant" htmlFor="email">
                      邮箱
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="请输入邮箱"
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-[16px] text-on-surface outline-none transition-[box-shadow] focus:border-primary focus:ring-[3px] focus:ring-primary/20"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] font-semibold tracking-wide text-on-surface-variant" htmlFor="message">
                    留言
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="可简要说明时间、预算、目标等…"
                    className="w-full resize-y rounded-lg border border-outline-variant bg-surface px-4 py-3 font-[16px] text-on-surface outline-none transition-[box-shadow] focus:border-primary focus:ring-[3px] focus:ring-primary/20 md:resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-linear-to-br from-primary to-secondary px-[44px] py-[17px] text-[13px] font-semibold tracking-wide text-white shadow-lg shadow-primary/25 transition-[transform] duration-200 hover:-translate-y-0.5 md:w-auto md:justify-start"
                >
                  发送留言
                  <Send className="size-4 transition-[transform] group-hover:translate-x-0.5" aria-hidden strokeWidth={1.95} />
                </button>
              </form>
            </section>

            <footer className="flex flex-wrap items-center gap-x-11 gap-y-4 py-6 text-outline transition-[filter] duration-300 grayscale hover:grayscale-0">
              {['企业级体验', '安全沟通', '及时响应'].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span aria-hidden className="size-[9px] rounded-full bg-secondary" />
                  <span className="text-[12px] font-medium text-on-surface-variant">{label}</span>
                </div>
              ))}
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
