import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
			<h1>React + Vite + TS</h1>
			<p>
				Count: <strong>{count}</strong>
			</p>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	)
}

export default App

