import './Size.css'

const Size = ({ size, onSelect, icon, canHover, selected }) => {
	/**
	 * TO DO: jsdoc
	 */
	const handleSelect = () => {
		if (onSelect) {
			onSelect(size)
		}
	}
	const accessibility = {
		wraper: {
			role: !selected ? 'listitem' : undefined,
		},
		button: {
			'aria-labelledby': !selected ? `size-${size.id}` : undefined,
			'aria-label': selected ? `talla ${size.label} seleccionada. Click para seleccionar más.` : undefined,
		},
	}

	return (
		<div {...accessibility.wraper}>
			<button {...accessibility.button} className={`size${canHover ? ' can-hover' : ''}`} onClick={handleSelect}>
				<span id={`size-${size.id}`} className='label' aria-selected={selected}>
					{size.label}
				</span>
				{icon && <span className='icon'>{icon}</span>}
			</button>
		</div>
	)
}

export default Size
