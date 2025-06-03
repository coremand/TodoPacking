export function Stats({ items }) {
	const totalItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const percentagePacked = totalItems
		? Math.round((packedItems / totalItems) * 100)
		: 0;
	return (
		<footer className='stats'>
			<em>
				You have {totalItems} item{totalItems <= 1 ? "" : "s"} in your list, and
				you already packed {packedItems} ({percentagePacked}%)
				{percentagePacked === 100 ? " - Ready to go!" : ""}.
			</em>
		</footer>
	);
}
