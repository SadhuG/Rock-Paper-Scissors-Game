import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const EndGameResult = ({
	displayGameResult,
	resultMessage,
	handleGameExit,
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

	// Closes the result modal after button click and callbacks to the "handleGameExit" function in "App.jsx"
	function handleClick() {
		gameResult.current.close();
		handleGameExit();
	}

	return (
		<dialog ref={gameResult}>
			{resultMessage && (
				<>
					<p>{resultMessage.title}</p>
					<p>{resultMessage.message}</p>
					<button onClick={handleClick}>{resultMessage.buttonText}</button>
				</>
			)}
		</dialog>
	);
};
EndGameResult.propTypes = {
	displayGameResult: PropTypes.bool.isRequired,
	resultMessage: PropTypes.object,
	handleGameExit: PropTypes.func,
};
export default EndGameResult;
