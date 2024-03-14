export async function GET(req, res) {
  const result = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    {
      cache: 'no-store',
    }
  )
  const data = await result.json()

  return Response.json({ datetime: data.datetime })
}
