import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section>
			<h2>Page not found</h2>
			<p>The page you’re looking for doesn’t exist.</p>
			<Link to="/">Go home</Link>
		</section>
	)
}
