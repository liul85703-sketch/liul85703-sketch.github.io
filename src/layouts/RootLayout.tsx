import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { CrtBootOverlay } from '../components/CrtBootOverlay'

export default function RootLayout() {
  const location = useLocation()

  return (
    <>
      <CrtBootOverlay />

      <div className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-surface font-sans text-on-surface antialiased">
        <SiteHeader />

        <main className="relative flex-1 pt-20">
          <div key={location.pathname} className="page-enter-contents">
            <Outlet />
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
