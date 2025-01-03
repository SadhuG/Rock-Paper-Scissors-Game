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

			<dialog
				ref={rulesModal}
				className="w-full max-w-full h-full max-h-full p-4 md:p-8 lg:py-10 lg:px-32 bg-black/30 fixed top-0 left-0 m-0"
			>
				<div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
					<div className="w-full h-full max-w-full max-h-full overflow-scroll flex flex-col gap-6 items-center bg-slate-900 text-xl lg:text-2xl text-white/90 px-3 md:px-10 py-10 md:py-14 border border-zinc-400 rounded-2xl">
						<div className="flex justify-between w-full">
							<p className="font-medium text-3xl">Rules:</p>
							<div className="focus:outline-none text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300  rounded-lg text-xl lg:text-2xl font-medium px-5 py-1 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-900">
								<p onClick={handleExit}>X</p>
							</div>
						</div>
						<div className="flex flex-col gap-2 items-start">
							<p className="font-medium text-2xl lg:text-3xl">What is this? </p>
							<p>
								This is a rock paper scissors game. Built with React JS &
								Tailwind CSS framework.
							</p>
						</div>

						<div className="flex flex-col gap-2 items-start">
							<p className="font-medium text-2xl lg:text-3xl">How to play</p>

							<div className="flex flex-col gap-3 items-start">
								<p>
									Choose the game mode:{" "}
									<span className="font-medium">Rounds</span> or{" "}
									<span className="font-medium">Pass n Play</span>
								</p>
								<ul className="list-decimal list-inside flex flex-col gap-2 items-start">
									<li>
										<span className="font-medium text-wrap">Rounds: </span>
										Start playing without any specific number of rounds input
										and play for as long as you want (upto 100 rounds)
									</li>
									<li>
										<span className="font-medium">Pass n play: </span>
										Start playing without any specific number of rounds input
										and play for as long as you want (upto 100 rounds)
									</li>
								</ul>
							</div>

							<ul className="list-disc list-inside flex flex-col gap-2 items-start">
								<li>
									You can start the game by selecting "rock", "scissors" or
									"paper".
								</li>
								<li>
									Rock beats scissors, scissors beats paper, paper beats rock
								</li>
							</ul>
						</div>

						<button
							onClick={handleExit}
							className="focus:outline-none text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300  rounded-lg text-xl lg:text-2xl font-medium px-5 py-2.5 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-900"
						>
							Close
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default RulesButtonAndModal;
