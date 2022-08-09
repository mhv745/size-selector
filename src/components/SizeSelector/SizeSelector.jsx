import { useState } from 'react'
import Selector from '../Selector/Selector'

/**
 * @typedef {Object} SizeSelectorProps
 * @property {Array} sizes
 * @property {string} defaultSize  ??????????????
 * @property {boolean} displayed   ??????????????
 */
const SizeSelector = ({ sizes, onSelect }) => {
	const [selectedSize, setSelectedSize] = useState()
	const selectSize = (size) => {
		console.log('selected size: ', size)
		setSelectedSize({ ...size })
		if (onSelect) {
			onSelect(size)
		}
	}

	return (
		<div className='size-selector'>
			<Selector sizes={sizes.slice(1, sizes.length)} selectedSize={selectedSize} onSelect={selectSize} />
		</div>
	)
}

export default SizeSelector

/**
 *  const sizes = color.sizes.map((size) => ({
 *      key: size.id,
 *      label: size.name,
 *      lastUnitsLabel: LastUnits.hasLastUnits(size.stock) ? "Últimas unidades" : null,
 *      disabled: size.stock === 0,
 * }))
 *
 * [{label, rightLabel, key }]
 * <SizeSelector displayed onSelect={(elemento) => {...}} sizes={color.sizes} />
 *
 * [{label, rightLabel, key }]
 * <SizeSelector displayed onSelect={(elemento) => {...}} sizes={[
 *  {label: "32", rightLabel: "últimas unidades"}
 *  {label: "33"}
 *  {label: "34"}
 * ]} />
 *
 * <SizeSelector displayed onSelect={(elemento) => {...}} ..>
 *      <p onClick=>40 </p>
 *      <p>42</p>
 *      <p>43</p>
 *      <img src={} alt=""/>
 *      <p>44</p>
 *      <p>45</p>
 * </SizeSelector>
 */

/**
 * <Selector>
 *
 *      <SizeSelector >
 *             <Size>
 *             <Size>
 *             <Size>
 *             <Size>
 *      </SizeSelector >
 *
 * </Selector>
 */
{
	/* <select>
	<option>
		<p>hola</p>
	</option>
	<option>
		<img src>
	</option>
</select> */
}
