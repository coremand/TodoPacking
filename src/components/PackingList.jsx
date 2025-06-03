import { Item } from "./Item";

export function PackingList({ items, deleteItems, toggleItems }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						deleteItems={deleteItems}
						toggleItems={toggleItems}
					/>
				))}
			</ul>
		</div>
	);
}
