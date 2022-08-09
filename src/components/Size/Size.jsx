import './Size.css'

const Size = ({ size, onSelect, icon }) => {
	return (
		<button className='size' onClick={() => onSelect(size)}>
			<span className='label'>{size.label}</span>
			{icon && <span className='icon'>{icon}</span>}
		</button>
	)
}

export default Size
