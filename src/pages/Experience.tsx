type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
}

const experience: ExperienceItem[] = [
  {
    company: 'Corporate Environments',
    role: 'Software Engineer',
    period: 'Past few years',
    description:
      'Designed, built, and tested software products using Agile methodologies.',
  },
  {
    company: 'Freelance',
    role: 'Aspiring Agentic AI Engineer',
    period: 'Present',
    description:
      'Exploring autonomous agents, prompt engineering, large language models, reinforcement learning, and multi-agent systems.',
  },
]

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {experience.map((e) => (
          <li
            key={e.company}
            style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}
          >
            <strong>{e.role}</strong> · {e.company}
            <div style={{ color: '#6b7280', fontSize: 14 }}>{e.period}</div>
            <p style={{ marginBottom: 0, color: '#4b5563' }}>{e.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
