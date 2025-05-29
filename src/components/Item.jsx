export function Item({ item }) {
	return (
		<li>
			<span
				style={
					item.packed
						? { textDecoration: "line-through", color: "#d1d1d1" }
						: {}
				}
			>
				{item.packed ? "✅" : ""} {item.quantity} {item.description}
			</span>
			<button className='btn'>❌</button>
		</li>
	);
}
