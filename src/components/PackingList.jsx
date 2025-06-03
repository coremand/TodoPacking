import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
	items,
	deleteItems,
	toggleItems,
	handleClearList,
}) {
	const [sortOption, setSortOption] = useState("input");

	const handleOptionChange = (event) => {
		setSortOption(event.target.value);
	};

	const handleClearItems = () => {
		handleClearList();
	};

	let sortedItems;

	switch (sortOption) {
		case "input":
			sortedItems = [...items].sort((a, b) => a.id - b.id);
			break;
		case "description":
			sortedItems = [...items].sort((a, b) =>
				a.description.localeCompare(b.description)
			);
			break;
		case "Packed":
			sortedItems = [...items].sort((a, b) => a.packed - b.packed);
			break;
		default:
			sortedItems = items;
	}
	return (
		<div className='list'>
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						deleteItems={deleteItems}
						toggleItems={toggleItems}
					/>
				))}
			</ul>

			<div className='actions'>
				<select onChange={handleOptionChange}>
					<option value='input'>Sort By Input</option>
					<option value='description'>Sort By Description</option>
					<option value='Packed'>Sort by packed status</option>
				</select>
				<button onClick={handleClearItems}>Clear List</button>
			</div>
		</div>
	);
}
