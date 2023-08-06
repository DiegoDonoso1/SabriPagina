import { Link } from 'react-router-dom';
import { ArrowIcon, ArrowIconLeft } from './ArrowIcon';
export default function Sabri() {
	return (
		<div className="relative p-10 bg-gradient-to-br from-e6fffd to-gray-100">
			<svg width="1200" height="820" viewBox="-20 -20 1240 860">
				<rect
					x="20"
					y="20"
					width="1200"
					height="800"
					fill="#f3e8ff" // fondo morado claro
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
				{/* Definiciones y filtros */}
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
				<foreignObject x="280" y="80" width="650" height="130">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							fontSize: '32px',
							fontWeight: 'bold',
							color: '#7e3aa8', // Letras moradas
							fontFamily: '"Sacramento", cursive',
							textAlign: 'center',
							lineHeight: '1.5em',
							padding: '10px',
							animation: 'fadeIn 2s',
						}}
					>
						Asi te veo
					</div>
				</foreignObject>

				{/* Párrafos abajo */}
				<foreignObject x="200" y="220" width="800" height="600">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							fontSize: '22px',
							color: '#241F3D',
							fontFamily: '"Sacramento", cursive',
							textAlign: 'justify',
							lineHeight: '1.5em',
							padding: '10px',
						}}
						className="text-purple-600 font-bold font-sacramento text-center text-2xl leading-7 p-4 animate-fadeIn"
					>
						La quiero porque es la mejor persona que creo conocer, realmente la
						admiro, a veces pienso que ella no cree eso de sí misma, que no
						puede ver lo hermosa que es de alma, lo inteligente que es, que a
						pesar de verse frágil por fuera, es toda una luchadora por dentro,
						defiende sus ideales hasta el final y siempre apoya y se preocupa
						por los demás. Yo quiero estar a su lado para verla cumplir sus
						sueños, verla convertirse en alguien aún mejor. Me gustaría apoyarla
						cuando no esté tan bien, cuando dude de ella y sus capacidades. Me
						gustaría que ella viera lo que yo cuando la miro.
					</div>
				</foreignObject>
				{/* Flecha izquierda */}
				<foreignObject x="40" y="370" width="100" height="200">
					<Link to="/">
						<ArrowIconLeft />
					</Link>
				</foreignObject>
				{/* Flecha derecha */}
				<foreignObject x="1150" y="370" width="100" height="200">
					<Link to="/foto">
						<ArrowIcon />
					</Link>
				</foreignObject>
				<image
					href="src/assets/img/corazon.png" // Cambia esto por la ruta de tu imagen
					x="750" // Posición x donde quieres colocar el sticker
					y="100" // Posición y donde quieres colocar el sticker
					width="50" // Ancho del sticker
					height="50" // Alto del sticker
					className="animate-heartbeat origin-center"
				/>
				{/* pinguino */}
				<g className="animate-movePenguin">
					<image
						href="src/assets/img/pinguino.png"
						x="60"
						y="700" // nueva posición Y
						width="100"
						height="100"
						className="animate-wobblePenguin"
						style={{ transformOrigin: '50px 800px' }} // Ajusta según las coordenadas de los "pies" del pingüino
					/>
				</g>
			</svg>
		</div>
	);
}
