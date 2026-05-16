import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/works', label: '作品' },
  { to: '/about', label: '关于我' },
  { to: '/contact', label: '联系我' },
] as const

const linkCls =
  'text-[13px] font-semibold tracking-wide transition-all duration-200 pb-1 border-b-2'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm shadow-primary/5 backdrop-blur-xl">
      <nav
        aria-label="主导航"
        className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-6"
      >
        <Link
          aria-label="首页"
          to="/"
          className="text-[22px] font-extrabold leading-none tracking-tighter text-primary"
        >
          L
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              end={item.to === '/'}
              to={item.to}
              className={({ isActive }) =>
                [
                  linkCls,
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:-translate-y-px hover:text-primary',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex rounded-lg p-2 text-on-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X aria-hidden size={26} strokeWidth={2} /> : <Menu aria-hidden size={26} strokeWidth={2} />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 border-b border-outline-variant/35 bg-surface/95 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col px-6 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                end={item.to === '/'}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-3 text-[14px] font-semibold tracking-wide',
                    isActive
                      ? 'bg-primary-container/12 text-primary'
                      : 'text-on-surface-variant hover:bg-primary-container/[0.06] hover:text-primary',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
