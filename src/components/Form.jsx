import { useState } from "react";

export function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Logic to handle form submission goes here
		if (!description) return;
		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};
		onAddItems(newItem);
		// Reset the form fields
		setDescription("");
		setQuantity(1);
	};

	const handleChangeInput = (event) => {
		setDescription(event.target.value);
	};
	const handleChangeQuantity = (event) => {
		setQuantity(event.target.value);
	};

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select value={quantity} onChange={handleChangeQuantity}>
				{Array.from({ length: 20 }, (_, i) => (
					<option key={i} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='Item...'
				value={description}
				onChange={handleChangeInput}
			/>
			<button type='submit' className='btn'>
				Add
			</button>
		</form>
	);
}
