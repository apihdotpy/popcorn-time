export type Movie = {
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  vote_count: number
  runtime: number
  tagline: string
  genres: Genre[]
}

export type Genre = {
  id: number
  name: string
}

export type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
