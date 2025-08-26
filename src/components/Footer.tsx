export function Footer() {
	return (
		<footer style={{ borderTop: '1px solid #e5e7eb', marginTop: 32 }}>
			<div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px', color: '#6b7280' }}>
				© {new Date().getFullYear()} Your Name. All rights reserved.
			</div>
		</footer>
	)
}
