type Project = {
	title: string
	description: string
	link?: string
}

const projects: Project[] = [
	{ title: 'Project One', description: 'Brief description of the project.', link: '#' },
	{ title: 'Project Two', description: 'Another project summary.', link: '#' },
]

export default function Projects() {
	return (
		<section>
			<h2>Projects</h2>
			<div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
				{projects.map((p) => (
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
