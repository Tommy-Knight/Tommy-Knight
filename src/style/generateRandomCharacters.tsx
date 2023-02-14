import React, { useEffect, useState } from 'react';

const RandomCharacter: React.FC = () => {
	const charactersArray =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.split('');
	const [characters, setCharacters] = useState<string[]>([]);
	const [hideRadius] = useState(3);
	const [hoveredIndex, setHoveredIndex] = useState(-1);

	useEffect(() => {
		let newChars: string[] = [];
		for (let i = 0; i < 2000; i++) {
			let randomIndex = Math.floor(Math.random() * charactersArray.length);
			newChars.push(charactersArray[randomIndex]);
		}
		setCharacters(newChars);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		<div
			className='App'
			style={{
				position: 'fixed',
				fontSize: '2rem',
				lineHeight: '34px',
				wordWrap: 'break-word',
				fontFamily: 'monospace',
				userSelect: 'none',
				width: '100vw',
				height: '100vh',
				zIndex: 1,
			}}>
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
