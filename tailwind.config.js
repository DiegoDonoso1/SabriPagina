/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: {
					100: '#A590AF',
					200: '#241F3D',
					300: '#593F62',
				},
				fondo: '#e6fffd',
				morado: '#B799FF',
				rosaPastel: '#FFD1E8',
				azulPastel: '#D1E8FF',
				amarilloPastel: '#FFFFD1',
				noseFondo: '#7e3aa8',
				noseHover: '#9466bf',
			},
			keyframes: {
				movePenguin: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(1000px)' }, // a
				},
				wobblePenguin: {
					'15%': { transform: 'rotate(5deg)' },
					'30%': { transform: 'rotate(-5deg)' },
					'45%': { transform: 'rotate(3deg)' },
					'60%': { transform: 'rotate(-3deg)' },
					'75%': { transform: 'rotate(2deg)' },
					'100%': { transform: 'rotate(0)' },
				},
				heartbeat: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }, // Esto hará que el corazón crezca un poco
					'100%': { transform: 'scale(1)' }, // Y luego vuelva a su tamaño original
				},
				fadeIn: {
					'0% ': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
			animation: {
				movePenguin: 'movePenguin 20s infinite', // Aumentado el tiempo a 20s para tener tiempo de regreso
				wobblePenguin: 'wobblePenguin 1s infinite',
				heartbeat: 'heartbeat 1s ease-in-out infinite',
				fadeIn: 'fadeIn 1s forwards',
			},
		},
	},
	plugins: [],
};
