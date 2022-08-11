import { useEffect, useState } from 'react'
import './Selector.css'
import Size from './Size/Size'

/**
 * @typedef {Object} SizeSelectorProps
 * @property {Array} sizes
 * @property {Function} onSelect
 */
const Selector = ({ sizes, selectedSize, onSelect }) => {
	const [expanded, setExpanded] = useState(true)

	useEffect(() => {
		setExpanded(!selectedSize)
	}, [selectedSize])

	const accessibility = {
		wrapper: {
			'aria-label': expanded ? 'selecciona tu talla' : 'talla seleccionada',
			role: expanded ? 'list' : undefined,
		},
	}

	return (
		<div className={`selector${expanded ? ' expanded' : ''}`} {...accessibility.wrapper}>
			{expanded ? (
				sizes.map((size) => (
					<Size canHover size={size} key={size.id} onSelect={onSelect} icon={size.icon} selected={false} />
				))
			) : (
				<Size
					canHover={false}
					size={selectedSize}
					onSelect={() => setExpanded(true)}
					icon='V'
					selected={true}
				/>
			)}
		</div>
	)
}

export default Selector
