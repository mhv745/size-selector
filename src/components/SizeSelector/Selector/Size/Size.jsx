import './Size.css'

const Size = ({ size, onSelect, icon, canHover, isOnlySize }) => {
	return isOnlySize ? (
		<div className={`size${isOnlySize ? ' only-size' : ''}`}>
			<span className='label'>{size.label}</span>
		</div>
	) : (
		<button
			className={`size${canHover ? ' can-hover' : ''}`}
			onClick={() => {
				if (onSelect) {
					onSelect(size)
				}
			}}
		>
			<span className='label'>{size.label}</span>
			{icon && <span className='icon'>{icon}</span>}
		</button>
	)
}

export default Size
