import { useEffect, useState } from 'react'
import { getAbout } from '../content/service'

export default function About() {
  const [data, setData] = useState<{ heading: string; body: string } | null>(null)
  useEffect(() => { getAbout().then(setData).catch(() => {}) }, [])
  return (
    <section>
      <h2>{data?.heading ?? 'About'}</h2>
      <p style={{ color: '#4b5563', maxWidth: 760 }}>{data?.body ?? ''}</p>
    </section>
  )
}
