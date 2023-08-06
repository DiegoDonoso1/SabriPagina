const VolumeControl = ({ audioRef, volume, setVolume }) => {
	const handleVolumeChange = (event) => {
		const newVolume = parseFloat(event.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
		setVolume(newVolume);
	};

	return (
		<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-16">
			<input
				type="range"
				min="0"
				max="1"
				step="0.01"
				value={volume}
				onChange={handleVolumeChange}
				className="appearance-none bg-purple-200 rounded-full transform -rotate-90 w-16 h-4"
			/>
		</div>
	);
};

export default VolumeControl;
