import React, { useEffect, useState } from 'react';

const RandomCharacter: React.FC = () => {
	const [characters, setCharacters] = useState<string[]>([]);
	const hideRadius = 3;
	const [hoveredIndex, setHoveredIndex] = useState(-1);

	const charactersArray =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.split('');
	//generates random characters from array
	useEffect(() => {
		let newChars = [];
		for (let i = 0; i < 2000; i++) {
			let randomIndex = Math.floor(Math.random() * charactersArray.length);
			newChars.push(charactersArray[randomIndex]);
		}
		setCharacters(newChars);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//randomly makes characters disappear
	useEffect(() => {
		const intervalId = setInterval(() => {
			const newCharacters = [...characters];
			let randomIndex = Math.floor(Math.random() * newCharacters.length);
			newCharacters[randomIndex] = ' ';
			setCharacters(newCharacters);
		}, 20);
		return () => clearInterval(intervalId);
	}, [characters]);
	//hides characters nearby to mouse in array
	const onMouseEnter = (index: number) => {
		setHoveredIndex(index);
		const newCharacters = [...characters];
		for (let i = index - hideRadius; i <= index + hideRadius; i++) {
			if (i >= 0 && i < newCharacters.length) {
				newCharacters[i] = ' ';
			}
		}
		setCharacters(newCharacters);
	};

	return (
		<div className='characters'>
			{characters.map((c, index) => {
				let char = c;
				if (
					index >= hoveredIndex - hideRadius &&
					index <= hoveredIndex + hideRadius &&
					hoveredIndex !== -1
				) {
					char = ' ';
				}
				return (
					<span key={index} onMouseEnter={() => onMouseEnter(index)}>
						{char}
					</span>
				);
			})}
		</div>
	);
};

export default RandomCharacter;
