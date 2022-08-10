import './Size.css'

const Size = ({ size, onSelect, icon, canHover }) => {
	return (
		<button
			aria-labelledby={`size-${size.id}`}
			className={`size${canHover ? ' can-hover' : ''}`}
			onClick={() => {
				if (onSelect) {
					onSelect(size)
				}
			}}
		>
			<span id={`size-${size.id}`} className='label'>
				{size.label}
			</span>
			{icon && <span className='icon'>{icon}</span>}
		</button>
	)
}

export default Size
