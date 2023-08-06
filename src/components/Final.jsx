import Game from './Game';

export default function Final() {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-e6fffd">
			<div
				className="bg-white p-4 rounded-xl shadow-xl max-w-2xl w-full border border-gray-200 bg-opacity-90 backdrop-blur-md 
        bg-gradient-to-br from-gray-100 to-white"
			>
				{/* Esta línea tiene el degradado ligero agregado */}

				<div className="relative bg-morado rounded-lg p-8 shadow-lg mb-8">
					<h1 className="text-white font-bold text-4xl mb-4">
						¡Se acabó, Sabri!
					</h1>
					<p className="text-white text-lg mb-4">
						Fue todo un desafío terminar esto. Espero te haya divertido y te
						gustase.
					</p>
					<p className="text-white text-lg mb-4">Lo hice con mucho cariño</p>

					<img
						src="src/assets/img/monosabrazo.gif"
						alt="monos abrazándose"
						className="mx-auto my-4 rounded-lg shadow-md w-1/2"
					/>

					<p className="text-white text-lg mt-4">
						Postdata: Clickea el corazón
					</p>
				</div>

				<div className="w-full h-64 flex justify-center items-center">
					<Game />
				</div>
			</div>
		</div>
	);
}
