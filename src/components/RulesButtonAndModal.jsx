/* eslint-disable react/no-unescaped-entities */
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
			<button
				onClick={handleClick}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg lg:text-2xl font-medium px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Rules
			</button>

			<dialog ref={rulesModal}>
				<p>What is this? </p>
				<p>
					This is a rock paper scissors game. Built with React JS & Tailwind CSS
					framework.
				</p>
				<p>How to play</p>
				<p>Choose the game mode rounds or pass n play</p>
				<p>Rounds: You enter the number of rounds and play the game</p>
				<p>
					Pass n play: Start playing without any specific number of rounds input
					and play for as long as you want (upto 100 rounds)
				</p>
				<p>
					You can start the game by selecting "rock", "scissors" or "paper".
				</p>
				<p>Rock beats scissors, scissors beats paper, paper beats rock</p>
				<button onClick={handleExit}>Close</button>
			</dialog>
		</>
	);
};

export default RulesButtonAndModal;
