import { useEffect, useState } from 'react'
import { getProjects } from '../content/service'

type Project = { title: string; description: string; link?: string }

export default function Projects() {
  const [heading, setHeading] = useState('Projects')
  const [items, setItems] = useState<Project[]>([])
  useEffect(() => { getProjects().then((d: any) => { setHeading(d?.heading || 'Projects'); setItems(d?.items || []) }).catch(() => {}) }, [])
  return (
    <section>
      <h2>{heading}</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {items.map((p) => (
          <article key={p.title} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ color: '#4b5563' }}>{p.description}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
