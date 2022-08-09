import './Size.css'

const Size = ({ size, onSelect, icon, canHover }) => {
	return (
		<button className={`size${canHover ? ' can-hover' : ''}`} onClick={() => onSelect(size)}>
			<span className='label'>{size.label}</span>
			{icon && <span className='icon'>{icon}</span>}
		</button>
	)
}

export default Size
