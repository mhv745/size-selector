import SizeSelector from './components/SizeSelector/SizeSelector'

const sizes = [
	{ label: 'Selecciona tu talla', id: '0' },
	{ label: 'XS', id: '1' },
	{ label: 'S', id: '2' },
	{ label: 'M', id: '3' },
	{ label: 'L - No disponible ¡Lo quiero!', id: '4', icon: '[M]' },
	{ label: 'XL', id: '5' },
	{ label: 'XXL', id: '6' },
	{ label: '2XL', id: '7' },
	{ label: '3XL', id: '8' },
	{ label: '4XL', id: '9' },
]

const oneSize = [{ id: '99', value: 'Talla única', label: 'Talla única', available: true, stock: 239 }]

function App() {
	return (
		<div className='App'>
			<div style={{ display: 'grid', gridTemplateColumns: 'auto 350px', minHeight: '100vh' }}>
				<main style={{ background: '#ccc' }}></main>
				<aside style={{ padding: '3rem 1rem' }}>
					<input type='text'></input>
					<h1>Multi talla</h1>
					<SizeSelector sizes={sizes} />
					<h1>Talla única</h1>
					<SizeSelector sizes={oneSize} />
				</aside>
			</div>
		</div>
	)
}

export default App
