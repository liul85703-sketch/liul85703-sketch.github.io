import { NavLink } from 'react-router-dom'

const footerLinks = [
  { to: '/works', label: '作品' },
  { to: '/about', label: '关于我' },
  { to: '/contact', label: '联系我' },
] as const

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-variant/25 bg-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-6">
        <NavLink
          aria-label="首页"
          end
          to="/"
          className="font-extrabold leading-none tracking-tighter text-[20px] text-on-surface"
        >
          L
        </NavLink>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {footerLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-[12px] font-medium text-on-surface-variant transition-colors duration-200 hover:text-secondary"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <p className="text-center text-[12px] text-on-surface-variant sm:text-right">
          © {year} 个人网站 · 精心呈现
        </p>
      </div>
    </footer>
  )
}
