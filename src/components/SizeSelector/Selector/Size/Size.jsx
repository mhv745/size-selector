import './Size.css'

const Size = ({ size, onSelect, icon, canHover, selected }) => {
	const handleSelect = () => {
		if (onSelect) {
			onSelect(size)
		}
	}

	return (
		<button
			aria-labelledby={`size-${size.id}`}
			className={`size${canHover ? ' can-hover' : ''}`}
			onClick={handleSelect}
		>
			<span id={`size-${size.id}`} className='label' aria-selected={selected}>
				{size.label}
			</span>
			{icon && <span className='icon'>{icon}</span>}
		</button>
	)
}

export default Size
