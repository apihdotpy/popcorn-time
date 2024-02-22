export const runtime = 'edge'

export async function GET(request: Request) {
  const { search } = new URL(request.url)

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie${search}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  )
  const data = await res.json()
  return Response.json(data)
}
