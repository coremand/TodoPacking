export function Item({ item, deleteItems, toggleItems }) {
	const handleDelete = () => {
		deleteItems(item.id);
	};

	const handleClick = () => {
		toggleItems(item.id);
	};

	return (
		<li>
			<span
				style={
					item.packed
						? { textDecoration: "line-through", color: "#d1d1d1" }
						: {}
				}
			>
				{item.packed ? (
					"✅"
				) : (
					<input type='checkbox' value={item.packed} onClick={handleClick} />
				)}
				{item.quantity} {item.description}
			</span>
			<button className='btn' onClick={handleDelete}>
				❌
			</button>
		</li>
	);
}
