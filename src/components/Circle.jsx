import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './ArrowIcon';
import Modal from './Modal';

export default function Circle() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({ img: '', text: '' });

	const handleCircleClick = (contentObj) => {
		setModalContent(contentObj);
		setModalOpen(true);
	};

	function renderCircle(cx, cy, emoji, text, content = '') {
		return (
			<g
				className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
				onClick={() => handleCircleClick(content)}
			>
				<circle cx={cx} cy={cy} r="70" fill="#b799ff" strokeWidth="10" />
				<text x={cx} y={cy - 10} fill="white" fontSize="40" textAnchor="middle">
					{emoji}
				</text>
				<text
					x={cx}
					y={cy + 30}
					fill="white"
					fontSize="16"
					fontWeight="bold"
					textAnchor="middle"
				>
					{text}
				</text>
			</g>
		);
	}

	function renderPath(x1, y1, x2, y2, cx, cy) {
		return (
			<path
				d={`M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`}
				stroke="#acbcff"
				fill="transparent"
				strokeWidth="2"
			/>
		);
	}

	return (
		<div className="relative p-10 bg-e6fffd">
			<svg width="1200" height="820" viewBox="-20 -20 1240 860">
				<rect
					x="20"
					y="20"
					width="1200"
					height="800"
					fill="#f3e8ff"
					rx="30"
					ry="30"
					filter="url(#shadow)"
				/>

				{/* Líneas de la hoja */}
				{[...Array(40)].map((_, i) => (
					<line
						key={i}
						x1="20"
						y1={20 + i * 20}
						x2="1220"
						y2={20 + i * 20}
						stroke="#e6fffd"
						strokeWidth="1"
					/>
				))}

				<defs>
					<filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="5" />
						<feOffset dx="5" dy="5" result="offsetblur" />
						<feComponentTransfer>
							<feFuncA type="linear" slope="0.5" />
						</feComponentTransfer>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Texto en la parte superior */}
				<foreignObject x="280" y="50" width="650" height="130">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							fontSize: '32px',
							fontWeight: 'bold',
							color: '#FFA07A', // Letras moradas
							fontFamily: '"Sacramento", cursive',
							textAlign: 'center',
							lineHeight: '1.5em',
							padding: '10px',
							animation: 'fadeIn 2s',
						}}
					>
						Momentos
					</div>
				</foreignObject>

				{/* Líneas de unión entre los círculos */}
				{renderPath(250, 250, 450, 270, 350, 200)}
				{renderPath(450, 270, 700, 250, 575, 320)}
				{renderPath(700, 250, 950, 290, 825, 200)}
				{renderPath(950, 290, 950, 550, 1000, 420)}
				{renderPath(950, 550, 700, 590, 825, 620)}
				{renderPath(700, 590, 450, 550, 575, 520)}
				{renderPath(450, 550, 250, 590, 350, 620)}

				{/* Función para renderizar círculos con emoji y texto */}
				{renderCircle(250, 250, '💻', 'problemas', {
					img: 'src/assets/img/modalImage/monkey-computer.gif',
					text: 'Todo empezó por ayudarte con un problema, no pensé en ese momento que te volverías alguien tan importante para mí. Me gusta creer que las cosas pasan por algo y creo que así fue, justo en esa reunión de Zoom nadie pudo solucionar tu problema, ni el mismísimo Max. Gracias a un conjunto de sucesos específicos te hablé y agradezco al destino por eso.',
				})}
				{renderCircle(450, 270, '📚', 'programar', {
					img: 'src/assets/img/modalImage/gato-digitando.gif',
					text: 'Esto fue lo que más tiempo nos hizo pasar juntos, aunque creas que no, fuiste un pilar importante también para que lo lograra, me diste una motivación para seguir adelante y conseguirlo. Espero pudiera haberte traspasado un poco de conocimiento que te sirva para tu futuro. Y espero sigamos programando juntos alguna cosa en el futuro.',
				})}
				{renderCircle(700, 250, '🎟️', 'cine', {
					img: 'src/assets/img/modalImage/oppen.avif',
					text: 'Esta fue la primera vez que hicimos algo y presencial, aunque casi no se da, pero quisiste acompañarme en un momento complicado y lo agradezco. Recuerdo esas 3 horas donde te tratabas de acomodar porque estabas cansada ya del asiento. Desde ese día asocio a Oppenheimer contigo.',
				})}
				{renderCircle(950, 290, '🍝', 'comida', {
					img: 'src/assets/img/modalImage/gatoComiendo.gif',
					text: 'Esta ocasión fue de mis preferidas, si bien ya habíamos ido al cine juntos, esta fue donde más pudimos conversar y escuchar tus historias de tus accidentes yuyines o de tus planes a futuro, es algo que recuerdo con cariño. Me gusta escucharte sobre lo que quieres hacer o quieres tener, me hace sentir parte de eso. Y era verdad que era mucha comida, de solo recordarlo me lleno.',
				})}
				{renderCircle(950, 550, '🚇', 'metro', {
					img: 'src/assets/img/modalImage/bicho_llorando.gif',
					text: 'Creo que siempre llevaré a esa señora y a la niña de al lado en mis recuerdos por tu culpa, aparte de toda la gente que habrá pasado como dijiste, aunque podría haber salido menos humillante tal vez, no me arrepiento de ese día porque aunque no fue la mejor te pude transmitir lo que pensaba de ti ',
				})}
				{renderCircle(700, 590, '📺', 'anime', {
					img: 'src/assets/img/modalImage/gatotv.gif',
					text: 'Aquí empezó tu caída al mundo oscuro, Empezamos con una película triste, pero bonita y terminamos viendo death note, me gusta verlo contigo, si bien ya la vi me entretengo esperando tus reacciones o escuchar tus pensamientos de que pasara. También tenemos pendientes otras películas que cuando se pueda espero veamos juntos.',
				})}
				{renderCircle(450, 550, '⛰️', 'cerro', {
					img: 'src/assets/img/modalImage/oso.gif',
					text: 'Soy como el Max diciendo lo del grupo preferido, pero este momento también es unos de mis preferidos, porque no teníamos un gran plan más que comer helado, pero al final hablamos en un parque, subimos el cerro y caminamos hasta estación central. Esos momentos comunes donde solo hablábamos de lo primero que se venía a la mente, los valoro bastante. Sé que no necesito un gran plan para pasarlo bien contigo, solo tu compañía y poder hablar. Próximamente tenemos que ver si podemos salir del escape room.',
				})}
				{renderCircle(250, 590, '🗿', '?', {
					img: 'src/assets/img/modalImage/monos.gif',
					text: 'Me faltaron muchos momentos, pero tengo pocos círculos y están complicados de hacer. Como menciones honorables menciono cuando hablamos horas por teléfono o el otro día donde te volviste un guarén y jugamos. Sé que es complicado, pero tú lo sabes, quiero seguir haciendo cosas contigo, no necesito grandes salidas o cosas entremedio, solo quiero compartir y apoyarte en lo que sea que te complique. Independiente de lo que sea, yo te apoyaré y estaré contigo. Si valoro algo es que para bien o para mal hemos sido honestos el uno con el otro y quiero que sigamos así. Puedes dudar muchas cosas pero nunca te cuestiones que eres una linda persona. ',
				})}

				{/* Flecha derecha */}
				<foreignObject x="1150" y="370" width="100" height="200">
					<Link to="/sabri">
						<ArrowIcon />
					</Link>
				</foreignObject>

				<image
					href="src/assets/img/gato.png"
					x="60"
					y="700"
					width="100"
					height="100"
					className="animate-moveCat"
				/>
			</svg>
			{/* Modal */}
			<Modal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				content={modalContent}
			/>
			<style>
				{`
        @keyframes moveCat {
			0% {
				x: 60;
			}
			50% {
				x: calc(100% - 160px); /* Ajusta según la distancia que desees. 160px es la suma del inicio x y el ancho de la imagen */
			}
			100% {
				x: 60;
			}
		}
		.animate-moveCat {
			animation: moveCat 15s ease-in-out infinite;
		}
    `}
			</style>
		</div>
	);
}
