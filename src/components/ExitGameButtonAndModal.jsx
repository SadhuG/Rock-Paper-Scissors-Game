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
				<button
					className="focus:outline-none text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300  rounded-lg text-xl lg:text-2xl font-medium px-5 py-2.5 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-900"
					onClick={handleClick}
				>
					{gameType === "rounds" ? "Exit Game" : "End Game"}
				</button>
			)}

			<dialog
				ref={exitGameModal}
				className="w-full max-w-full h-full max-h-full p-4 md:p-8 lg:py-10 lg:px-32 bg-black/30 fixed top-0 left-0 m-0"
			>
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex flex-col gap-6 items-center bg-slate-900 text-xl lg:text-3xl text-white/90 px-3 md:px-10 py-10 md:py-14 border border-zinc-400 rounded-2xl">
						<p>Do you really want to exit game?</p>
						<div className="flex gap-4 items-center justify-center">
							<button
								onClick={handleExit}
								className="focus:outline-none text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300  rounded-lg text-xl lg:text-2xl font-medium px-5 py-2.5 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-900"
							>
								Yes
							</button>
							<button
								onClick={cancelExit}
								className="focus:outline-none text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300  rounded-lg text-xl lg:text-2xl font-medium px-5 py-2.5 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-900"
							>
								No
							</button>
						</div>
					</div>
				</div>
			</dialog>
		</>
	);
};

ExitGameButtonAndModal.propTypes = {
	gameType: PropTypes.string,
	exitGame: PropTypes.func,
};

export default ExitGameButtonAndModal;
