import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useState, useEffect, useRef } from 'react';
import VolumeControl from './components/VolumeControl';

function App() {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [progress, setProgress] = useState(0);
	const [showVolumeSlider, setShowVolumeSlider] = useState(false);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.ontimeupdate = () => {
				setProgress(
					(audioRef.current.currentTime / audioRef.current.duration) * 100
				);
			};
		}
	}, []);

	const togglePlayPause = () => {
		const audio = audioRef.current;
		audio.volume = volume;
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<>
			<Router>
				<div className="h-screen w-screen bg-fondo flex flex-col items-center justify-center overflow-hidden">
					{/* Contenedor para el reproductor y el diario */}
					<div className="flex w-full justify-center items-center ms-10">
						{/* Diseño del Celular */}
						<div className="bg-morado w-64 h-128 rounded-lg shadow-xl flex flex-col items-center p-4 mr-8">
							{/* Imagen de la Canción */}
							<img
								src="src/assets/img/caratulaTylor.jpg"
								alt="Canción"
								className="w-full h-2/3 rounded-lg"
							/>

							{/* Botones de Play y Pause */}
							<div className="flex justify-center items-center space-x-4 mt-4">
								{isPlaying ? (
									<img
										src="src/assets/img/pause.svg"
										alt="Pause"
										className="cursor-pointer"
										onClick={togglePlayPause}
									/>
								) : (
									<img
										src="src/assets/img/play-duotone.svg"
										alt="Play"
										className="cursor-pointer"
										onClick={togglePlayPause}
									/>
								)}
								{/* Barra de Progreso */}
								<div className="relative w-2/3 h-2 mt-2 bg-purple-200 rounded-full mr-2">
									<div
										className="absolute left-0 top-0 h-2 bg-purple-500 rounded-full"
										style={{ width: `${progress}%` }}
									></div>
								</div>

								{/* Contenedor para ícono y slider */}
								<div className="relative cursor-pointer w-20 h-20 flex items-center justify-center">
									<img
										src="src/assets/img/volume-bold.svg"
										alt="Volume"
										className="w-20 h-20 z-0"
										onClick={() => setShowVolumeSlider(!showVolumeSlider)}
									/>
									{showVolumeSlider && (
										<VolumeControl
											audioRef={audioRef}
											volume={volume}
											setVolume={setVolume}
										/>
									)}
								</div>
							</div>
						</div>

						{/* Contenido del diario */}
						<div className="container mx-auto py-4">
							<Routes>
								<Route path="*" element={<AnimatedRoutes />} />
							</Routes>
						</div>
					</div>

					<audio ref={audioRef} id="miMusica">
						<source src="src/assets/Enchanted.mp3" type="audio/mpeg" />
						Tu navegador no soporta el elemento de audio.
					</audio>
				</div>
			</Router>

			<style>
				{`
                    .page-flip-enter, .page-flip-exit, .page-flip-enter.page-flip-enter-active, .page-flip-exit.page-flip-exit-active {
                        transform-origin: center center;
                        transform-style: preserve-3d;
                        backface-visibility: hidden;
                        position: absolute;  /* Añade posición absoluta */
                        top: 0;              /* Asegura que comienza desde el top */
                        left: 0;             /* Asegura que comienza desde la izquierda */
                        width: 100%;         /* Ocupa todo el ancho disponible */
                        
                    }
                    
                    .page-flip-enter {
                        transform: translateX(-100%);
                        opacity: 0.01;
                    }
                    
                    .page-flip-enter.page-flip-enter-active {
                        transform: translateX(0);
                        opacity: 1;
                        transition: transform 450ms ease-in, opacity 450ms ease-in;
                    }
                    
                    .page-flip-exit {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    
                    .page-flip-exit.page-flip-exit-active {
                        transform: translateX(100%);
                        opacity: 0.01;
                        transition: transform 450ms ease-in, opacity 450ms ease-in;
                    }
                `}
			</style>
		</>
	);
}

export default App;
