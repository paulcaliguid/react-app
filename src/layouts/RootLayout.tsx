import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function RootLayout() {
	return (
		<div>
			<Navbar />
			<main style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px' }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
