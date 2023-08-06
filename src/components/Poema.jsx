import { Link } from 'react-router-dom';
import { ArrowIcon, ArrowIconLeft } from './ArrowIcon';

export default function Poema() {
	const poemLines = [
		'Quererte es cuando estoy en algo',
		'y me pregunto si estarás bien,',
		'querer es ver a lo lejos y sentir',
		'al corazón temperarse de a poco.',
		'',
		'Quererte es complicado como',
		'cuando fracasas en algo que intentaste,',
		'querer es exponerse a sufrir',
		'y seguir de pie.',
		'',
		'Quererte es hacerme mejor',
		'para brindarte la mano,',
		'querer es desear el bien sin',
		'algo a cambio.',
		'',
		'Quererte es resistir una caída',
		'pero te levantas para ocultar',
		'el dolor,',
		'querer es tragarse el orgullo',
		'y aceptar el error.',
		'',
		'Quererte es una marea de',
		'emociones que impactan contra',
		'la arena, querer es el sentimiento',
		'al ver algo por primera vez.',
		'',
		'Quererte es algo incondicional,',
		'querer es universal.',
	];

	return (
		<div className="relative p-10 bg-gradient-to-br from-e6fffd to-f3e8ff z-0">
			<svg width="1200" height="900" viewBox="-20 -20 1240 860">
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
				{/* Filtro de sombra */}
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

				{/* Título del Poema */}
				<foreignObject x="20" y="20" width="1200" height="50">
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
						Nose :c
					</div>
				</foreignObject>

				{/* Párrafos del Poema */}
				<foreignObject x="270" y="80" width="680" height="950">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							fontSize: '18px',
							color: '#241F3D',
							fontFamily: 'serif',
							textAlign: 'center',
							lineHeight: '1.1em',
							padding: '10px',
							backgroundColor: 'rgba(255, 255, 255, 0.6)',
							borderRadius: '15px',
							boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
						}}
						className="text-purple-600 font-bold font-sacramento text-center text-2xl leading-7 p-4 animate-fadeIn"
					>
						{poemLines.map((line, index) => (
							<>
								<p key={index} style={{ margin: '5px 0' }}>
									{line}
								</p>
								{line === '' && <p style={{ margin: '5px 0' }}>&nbsp;</p>}
							</>
						))}
					</div>
				</foreignObject>

				{/* Flechas de navegación */}
				<foreignObject x="40" y="370" width="100" height="200">
					<Link
						to="/foto"
						style={{
							display: 'block',
							padding: '10px',
							borderRadius: '50%',
						}}
					>
						<ArrowIconLeft />
					</Link>
				</foreignObject>
				<foreignObject x="1150" y="370" width="100" height="200">
					<Link
						to="/cierre"
						style={{
							display: 'block',
							padding: '10px',
							borderRadius: '50%',
						}}
					>
						<ArrowIcon />
					</Link>
				</foreignObject>

				<image
					href="src/assets/img/mono.png"
					x="60"
					y="700"
					width="100"
					height="100"
					className="animate-moveCat"
				/>
			</svg>
		</div>
	);
}
