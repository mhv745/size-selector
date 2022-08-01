/**
 * @typedef {Object} SizeSelectorProps
 * @property {Array} sizes
 * @property {Function} onSelect
 * @property {string} defaultSize
 * @property {boolean} displayed
 *
 *
 */
export const SizeSelector = ({ sizes, onSelect }) => {
	return (
		<div>
			{sizes.map((size) => (
				<ElementSelector size={size} />
			))}
		</div>
	)
}

const ElementSelector = ({ size }) => {
	return (
		<div onClick={onSelect(size)} key={size.key}>
			{size.label}
			{size.rightLabel && <span>{size.rightLabel}</span>}
		</div>
	)
}

/**
 *
 * [{label, rightLabel, key, value, stock, }]
 * <SizeSelector displayed onSelect={(elemento) => {...}} sizes={[
 *  {label: "32", rightLabel: "últimas unidades"}
 *  {label: "33"}
 *  {label: "34"}
 * ]} />
 *
 * <SizeSelector displayed onSelect={(elemento) => {...}} ..>
 *      <p>40 </p>
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
