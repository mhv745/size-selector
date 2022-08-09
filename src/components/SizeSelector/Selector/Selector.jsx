import { useEffect, useState } from 'react'
import OnlySize from './OnlySize/OnlySize'
import './Selector.css'
import Size from './Size/Size'

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
			{sizes.length > 1 ? (
				expanded ? (
					sizes.map((size) => (
						<Size canHover size={size} key={size.id} onSelect={onSelect} icon={size.icon} />
					))
				) : (
					<Size canHover={false} size={selectedSize} onSelect={() => setExpanded(true)} icon='V' />
				)
			) : (
				<OnlySize size={sizes[0]} />
			)}
		</div>
	)
}

export default Selector
