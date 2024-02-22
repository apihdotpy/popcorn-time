import Image from 'next/image'

import { Movie } from '@/types/movie'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className="relative h-[450px] w-[300px] overflow-hidden rounded-lg">
      <Image
        src={`https://media.themoviedb.org/t/p/w300_and_h450_face/${movie.poster_path}`}
        alt=""
        fill
        style={{ objectFit: 'cover' }}
      />
      <h2>{movie.title}</h2>
    </div>
  )
}
