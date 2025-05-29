import { Item } from "./Item";

export function PackingList({ items }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}
