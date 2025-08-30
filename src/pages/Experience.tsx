import { useEffect, useState } from 'react'
import { getExperience } from '../content/service'

type ExperienceItem = { company: string; role: string; period: string; description: string }

export default function Experience() {
  const [heading, setHeading] = useState('Experience')
  const [items, setItems] = useState<ExperienceItem[]>([])
  useEffect(() => { getExperience().then((d: any) => { setHeading(d?.heading || 'Experience'); setItems(d?.items || []) }).catch(() => {}) }, [])
  return (
    <section>
      <h2>{heading}</h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {items.map((e) => (
          <li key={e.company} style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
            <strong>{e.role}</strong> — {e.company}
            <div style={{ color: '#6b7280', fontSize: 14 }}>{e.period}</div>
            <p style={{ marginBottom: 0, color: '#4b5563' }}>{e.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
