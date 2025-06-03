import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
	const [items, setItems] = useState([]);

	const handleAddItems = (newItem) => {
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const handleDeleteItems = (id) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const handleTogglePacked = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				deleteItems={handleDeleteItems}
				toggleItems={handleTogglePacked}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
