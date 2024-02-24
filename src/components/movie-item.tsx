import Image from 'next/image'

import { Movie } from '@/types/movie'

interface MovieItemProps {
  movie: Movie
}

function getRating(voteAverage: number) {
  return Math.round((voteAverage / 10) * 100)
}

export function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className="relative h-[400px] w-64 overflow-hidden rounded-lg">
      <Image
        src={`https://media.themoviedb.org/t/p/w300_and_h450_face/${movie.poster_path}`}
        alt={movie.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/75 via-black/0 to-transparent p-4 text-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
          {getRating(movie.vote_average)}
        </div>
        <div>
          <h1 className="text-lg font-semibold">{movie.title}</h1>
          <p className="text-sm">{movie.release_date}</p>
        </div>
      </div>
    </div>
  )
}
