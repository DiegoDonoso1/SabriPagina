import PropTypes from 'prop-types';
export default function Modal({ isOpen, onClose, content }) {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black opacity-50"></div>

			<div className="z-10 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 scale-95 opacity-90">
				{/* Header */}
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-semibold">Recuerdo</h2>
					<button
						onClick={onClose}
						className="p-2 rounded-full hover:bg-gray-200 transition-colors"
					>
						<span className="sr-only">Cerrar</span>
						&times;
					</button>
				</div>

				{/* Image */}
				<div className="mt-4">
					<img
						src={content.img}
						alt="Recuerdo"
						className="w-full h-56 object-cover rounded-md"
					/>
				</div>

				{/* Content */}
				<div className="mt-4">
					<p className="text-sm text-gray-600">{content.text}</p>
				</div>
			</div>
		</div>
	);
}
Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	content: PropTypes.string.isRequired,
};
