import hero from '../assets/hero.svg'

export default function Home() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        padding: '40px 0',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: '1 1 360px' }}>
        <h1 style={{ fontSize: 40, marginBottom: 16 }}>
          Hi, I’m Paul Timothy Deximo Caliguid
        </h1>
        <p
          style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 560,
            marginBottom: 24,
          }}
        >
          Aspiring agentic AI engineer and freelancer exploring autonomous
          agents, large language models, reinforcement learning, and
          multi-agent systems.
        </p>
        <a
          href="/projects"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          View Projects
        </a>
      </div>
      <img
        src={hero}
        alt=""
        style={{ flex: '1 1 300px', maxWidth: 400, height: 'auto' }}
      />
    </section>
  )
}
