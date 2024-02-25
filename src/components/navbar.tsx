import Link from 'next/link'

export function Navbar() {
  return (
    <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
      <div className="contents border-slate-900/10 lg:pointer-events-none lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
        <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b bg-white/95 px-4 backdrop-blur transition dark:border-slate-50/[0.06] dark:bg-transparent lg:left-72 lg:z-30 xl:left-80">
          <div>
            <nav className="hidden md:block">
              <ul>
                <li>
                  <Link href="/" className="text-sm font-semibold text-white">
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
