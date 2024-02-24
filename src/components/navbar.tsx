export function Navbar() {
  return (
    <header className="contents backdrop-blur-sm lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
      <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80"></div>
      <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-zinc-900/[var(--bg-opacity-dark)] dark:backdrop-blur sm:px-6 lg:z-30 lg:px-8 xl:left-80">
        <h1>Popcorn Time</h1>
      </div>
    </header>
  )
}
