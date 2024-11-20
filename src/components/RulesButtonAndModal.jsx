import { useRef } from "react";

const RulesButtonAndModal = () => {
	// Sets the display of the exit button

	// DOM Ref to the dialog
	const rulesModal = useRef(null);
	// Function to open the exit modal
	function openModal() {
		rulesModal.current.showModal();
	}
	// Function to hide exit modal and show exit button again
	function closeModal() {
		rulesModal.current.close();
	}

	// Handles the Exit Game / End Game button click
	function handleClick() {
		openModal();
	}

	// Handles the confirmation to exit
	function handleExit() {
		closeModal();
	}

	return (
		<>
			<button onClick={handleClick}>Rules</button>
			<dialog ref={rulesModal}>
				<p>Do you really want to exit game?</p>
				<button onClick={handleExit}>Close</button>
			</dialog>
		</>
	);
};
export default RulesButtonAndModal;
