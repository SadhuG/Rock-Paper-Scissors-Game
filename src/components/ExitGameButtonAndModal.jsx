import PropTypes from "prop-types";
import { useRef, useState } from "react";

const ExitGameButtonAndModal = ({ gameType, exitGame }) => {
	// Sets the display of the exit button
	const [displayExitButton, setDisplayExitButton] = useState(true);

	// DOM Ref to the dialog
	const exitGameModal = useRef(null);
	// Function to open the exit modal
	function openModal() {
		exitGameModal.current.showModal();
	}
	// Function to hide exit modal and show exit button again
	function closeModal() {
		exitGameModal.current.close();
	}

	// Handles the Exit Game / End Game button click
	function handleClick() {
		openModal();
		setDisplayExitButton(false);
	}

	// Handles the confirmation to exit
	function handleExit() {
		setDisplayExitButton(true);
		closeModal();
		exitGame();
	}

	// handles cancellation of exit hides exit modal and displays exit button again
	function cancelExit() {
		setDisplayExitButton(true);
		closeModal();
	}

	return (
		<>
			{displayExitButton && (
				<button onClick={handleClick}>
					{gameType === "rounds" ? "Exit Game" : "End Game"}
				</button>
			)}
			<dialog ref={exitGameModal}>
				<p>Do you really want to exit game?</p>
				<button onClick={handleExit}>Yes</button>
				<button onClick={cancelExit}>No</button>
			</dialog>
		</>
	);
};

ExitGameButtonAndModal.propTypes = {
	gameType: PropTypes.string,
	exitGame: PropTypes.func,
};

export default ExitGameButtonAndModal;
