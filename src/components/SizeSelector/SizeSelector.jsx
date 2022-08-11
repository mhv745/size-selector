import { useState } from 'react'
import OnlySize from './OnlySize/OnlySize'
import Selector from './Selector/Selector'
import './SizeSelector.css'

/**
 * @typedef {Object} SizeSelectorProps
 * @property {Array} sizes
 *
 */
const SizeSelector = ({ sizes, onSelect }) => {
	const [selectedSize, setSelectedSize] = useState()
	const selectSize = (size) => {
		setSelectedSize({ ...size })
		if (onSelect) {
			onSelect(size)
		}
	}

	return (
		<div className='size-selector'>
			{sizes.length > 1 ? (
				<Selector sizes={sizes.slice(1, sizes.length)} selectedSize={selectedSize} onSelect={selectSize} />
			) : (
				<OnlySize size={sizes[0]} />
			)}
		</div>
	)
}

export default SizeSelector
