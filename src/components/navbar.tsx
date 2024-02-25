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

{
  /* <header className="contents lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents dark:border-slate-50/[0.05] lg:block lg:w-72 lg:border-r lg:border-slate-900/10 xl:w-80">
            <div className="fixed inset-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/50 px-4 backdrop-blur-sm transition dark:bg-slate-900/20 dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
              <div className="absolute inset-x-0 top-full h-px bg-slate-900/[.075] transition dark:bg-white/[.075]"></div>
              Navbar
            </div>
          </div>
        </header> */
}

///fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm lg:left-72 xl:left-80 dark:backdrop-blur bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]

//sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent
