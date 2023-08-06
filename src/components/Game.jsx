import { useState, useEffect, useRef, useLayoutEffect } from 'react';

const phrases = [
	'Quiero que sepas que eres especial para mí.',
	'Cada momento a tu lado es único y valioso.',
	'Tu sonrisa ilumina mi día.',
	'Gracias por ser parte de mi vida y por hacerla más especial.',
	'Siempre estaré aquí para ti.',
	'Eres una persona maravillosa.',
	'Me siento afortunado de haberte conocido.',
];

const Game = () => {
	const [heartPosition, setHeartPosition] = useState({ x: 0, y: 0 });
	const [currentPhrase, setCurrentPhrase] = useState('');
	const [heartCount, setHeartCount] = useState(0);
	const [availablePhrases, setAvailablePhrases] = useState([...phrases]);

	const gameContainerRef = useRef(null);

	const getRandomPosition = () => {
		if (gameContainerRef.current) {
			const containerWidth = gameContainerRef.current.offsetWidth;
			const containerHeight = gameContainerRef.current.offsetHeight;
			const heartSize = 50;
			const x = Math.random() * (containerWidth - heartSize);
			const y = Math.random() * (containerHeight - heartSize);
			return { x: Math.max(0, x), y: Math.max(0, y) };
		}
		return { x: 0, y: 0 };
	};

	useEffect(() => {
		if (gameContainerRef.current) {
			const containerWidth = gameContainerRef.current.offsetWidth;
			const containerHeight = gameContainerRef.current.offsetHeight;

			console.log('Ancho: ', containerWidth); // Agregamos esto
			console.log('Alto: ', containerHeight); // Agregamos esto

			const initialX = containerWidth / 2 - 25;
			const initialY = containerHeight / 2 - 25;

			setHeartPosition({ x: initialX, y: initialY });
			handleHeartClick();
		}
	}, [gameContainerRef]);

	const handleHeartClick = () => {
		let selectedPhrase;

		if (availablePhrases.length === 0) {
			setAvailablePhrases([...phrases]);
			selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];
		} else {
			const randomIndex = Math.floor(Math.random() * availablePhrases.length);
			selectedPhrase = availablePhrases[randomIndex];

			// Actualizar las frases disponibles eliminando la seleccionada
			const updatedPhrases = [...availablePhrases];
			updatedPhrases.splice(randomIndex, 1);
			setAvailablePhrases(updatedPhrases);
		}

		setCurrentPhrase(selectedPhrase);
		setHeartCount((prevCount) => prevCount + 1);
		setHeartPosition(getRandomPosition());
	};

	useLayoutEffect(() => {
		setTimeout(() => {
			if (gameContainerRef.current) {
				const containerWidth = gameContainerRef.current.offsetWidth;
				const containerHeight = gameContainerRef.current.offsetHeight;

				const initialX = containerWidth / 2 - 25;
				const initialY = containerHeight / 2 - 25;

				setHeartPosition({ x: initialX, y: initialY });
				handleHeartClick();
			}
		}, 10); // delay de 10 milisegundos
	}, []);

	return (
		<>
			<div
				ref={gameContainerRef}
				className="h-full w-full flex flex-col justify-center items-center bg-fondo text-red-500 text-4xl cursor-pointer relative"
			>
				<span
					role="img"
					aria-label="Heart"
					className="absolute animate-heartbeat"
					style={{ top: heartPosition.y, left: heartPosition.x, zIndex: 9999 }}
					onClick={handleHeartClick}
				>
					❤️
				</span>
				{currentPhrase && (
					<div
						key={currentPhrase}
						className="rounded-xl shadow-lg p-4 mt-4 w-3/4 text-center absolute top-1/4 bg-azulPastel text-purple-300 transition-opacity duration-2000 ease-in-out opacity-1 z-50 animate-fadeIn"
					>
						{currentPhrase}
					</div>
				)}
			</div>
		</>
	);
};

export default Game;
