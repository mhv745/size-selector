import { useEffect, useState } from 'react'
import Size from '../Size/Size'
import './Selector.css'

/**
 * @typedef {Object} SizeSelectorProps
 * @property {Array} sizes
 * @property {Function} onSelect
 * @property {string} defaultSize
 * @property {boolean} displayed
 *
 *
 */
const Selector = ({ sizes, selectedSize, onSelect }) => {
	const [expanded, setExpanded] = useState(true)

	useEffect(() => {
		setExpanded(!selectedSize)
	}, [selectedSize])
	return (
		<div className={`selector${expanded ? ' expanded' : ''}`}>
			{expanded ? (
				sizes.map((size) => <Size size={size} key={size.id} onSelect={onSelect} icon={size.icon} />)
			) : (
				// <button onClick={() => setExpanded(true)}>
				// 	<span className='label'>{selectedSize.label}</span>
				// 	<span>V</span>
				// </button>
				<Size size={selectedSize} onSelect={() => setExpanded(true)} icon='V' />
			)}
		</div>
	)
}

export default Selector
