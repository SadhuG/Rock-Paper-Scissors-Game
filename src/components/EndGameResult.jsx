import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const EndGameResult = ({
	displayGameResult,
	resultMessage,
	handleResultExit,
}) => {
	// Ref to the dialog
	const gameResult = useRef(null);
	// Displays the result at the end of the game
	useEffect(() => {
		if (displayGameResult == true) {
			gameResult.current.showModal();
		}
		return;
	}, [displayGameResult]);

	// Closes the result modal after button click and callbacks to the "handleResultExit" function in "App.jsx"
	function handleClick() {
		gameResult.current.close();
		handleResultExit();
	}

	return (
		<dialog
			ref={gameResult}
			className="w-full max-w-full h-full max-h-full p-4 md:p-8 lg:py-10 lg:px-32 bg-black/30 fixed top-0 left-0 m-0"
		>
			{/* Container */}
			<div className="w-full h-full flex items-center justify-center">
				{/* Actual Result Card */}
				<div className="flex flex-col gap-6 items-center bg-slate-900 text-xl lg:text-3xl text-white/90 px-3 md:px-10 py-10 md:py-14 border border-zinc-400 rounded-2xl">
					{resultMessage && (
						<>
							<p className="text-4xl md:text-5xl lg:text-6xl">
								{resultMessage.title}
							</p>
							{resultMessage.image && resultMessage.image}
							<p className="text-center">{resultMessage.message}</p>
							<button
								onClick={handleClick}
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg lg:text-2xl font-medium px-3 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								{resultMessage.buttonText}
							</button>
						</>
					)}
				</div>
			</div>
		</dialog>
	);
};
EndGameResult.propTypes = {
	displayGameResult: PropTypes.bool.isRequired,
	resultMessage: PropTypes.object,
	handleResultExit: PropTypes.func,
};
export default EndGameResult;
