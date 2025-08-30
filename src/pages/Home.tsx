import hero from '../assets/hero.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHome } from '../content/service'

export default function Home() {
  const [data, setData] = useState<{ headline: string; subheadline?: string; ctaLabel?: string; ctaHref?: string; image?: string } | null>(null)
  useEffect(() => { getHome().then(setData).catch(() => {}) }, [])
  const d = data
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, padding: '40px 0', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 360px' }}>
        <h1 style={{ fontSize: 40, marginBottom: 16 }}>{d?.headline ?? '...'}</h1>
        <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 560, marginBottom: 24 }}>
          {d?.subheadline ?? ''}
        </p>
        {d?.ctaHref && d?.ctaLabel && (
          <Link to={(d?.ctaHref && d.ctaHref.startsWith('/') ? d.ctaHref : '/projects')} >
            {d.ctaLabel}
          </Link>
        )}
      </div>
      <img src={d?.image || hero} alt="" style={{ flex: '1 1 300px', maxWidth: 400, height: 'auto' }} />
    </section>
  )
}






