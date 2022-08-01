import { SizeSelector } from './components/SizeSelector'

function App() {
	return (
		<div className='App'>
			<div style={{ display: 'grid', gridTemplateColumns: 'auto 350px', minHeight: '100vh' }}>
				<main style={{ background: '#ccc' }}></main>
				<aside style={{ background: '#ddd', padding: '3rem 1rem' }}>
					<SizeSelector />
				</aside>
			</div>
		</div>
	)
}

export default App
