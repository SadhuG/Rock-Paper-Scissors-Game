import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const RoundInputForm = ({ setGame, formDisplay }) => {
	// Form round input states
	const [roundsInput, setRoundsInput] = useState(3);

	// Handles the Dialog display for input form
	// References to the dialog in the DOM
	const inputForm = useRef(null);
	// Shows the dialog modal
	useEffect(() => {
		if (formDisplay === true) {
			inputForm.current.showModal();
		}
		return;
	}, [formDisplay]);

	// Closes the dialog modal
	function closeModal() {
		inputForm.current.close();
	}

	// Triggers form submission when "Enter" key is pressed in the input field
	// Prevents the "." "-" "+" from getting registered into the input field
	function handleInputKeyDown(e) {
		if (e.key === "." || e.key === "e" || e.key === "+" || e.key === "-") {
			e.preventDefault();
		}
		if (e.key === "Enter") handleFormSubmit(e, "rounds");
	}

	// Handles any change in the input and parseInt is added to convert strings accepted by form input into numbers (Stupid react problems)
	function handleInputChange(e) {
		setRoundsInput(parseInt(e.target.value));
	}

	// Handles form submission and sends the rounds input and game type to App.jsx using setGame function
	function handleFormSubmit(e, gameType) {
		// Prevents form submission to the server because no backend present
		e.preventDefault();

		// Pass and Play handled
		if (gameType === "pnp") {
			setGame(gameType, roundsInput);
			return closeModal();
		}

		// Round input edge cases handled
		if (roundsInput <= 0 || roundsInput % 1 != 0 || roundsInput === "") {
			setRoundsInput("");
			alert(
				"Please enter the number of rounds a whole number greater than 0 to play"
			);
			return;
		}

		// Normal flow of form submission
		setGame(gameType, roundsInput);
		return closeModal();
	}

	return (
		<dialog
			ref={inputForm}
			className="w-full max-w-full h-full max-h-full p-4 md:p-8 lg:py-10 lg:px-32 bg-black/30 fixed top-0 left-0 m-0"
		>
			{/* Container */}
			<div className="relative w-full h-full flex items-center justify-center">
				{/* Actual form styling */}
				<div className="flex flex-col gap-6 items-center bg-slate-900 text-xl lg:text-3xl text-white/90 px-3 md:px-10 py-10 md:py-14 border border-zinc-400 rounded-2xl">
					<p className="text-4xl">Hello There!</p>
					<p className=" text-center">
						Enter the number of rounds you want to play or just Pass & Play
					</p>

					<form className="flex flex-col gap-4 mt-4">
						<label className="flex flex-col gap-1">
							<span className="hidden">Enter the number of rounds</span>
							<input
								className="p-2 border border-zinc-400 rounded-lg shadow-lg bg-slate-800 text-white text-center
								[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
								type="number"
								placeholder="eg. 3"
								value={roundsInput}
								onChange={handleInputChange}
								onKeyDown={handleInputKeyDown}
							/>
						</label>

						<div className="flex gap-4 items-center justify-center">
							{/* Button for fixed rounds */}
							<button
								type="button"
								onClick={(e) => handleFormSubmit(e, "rounds")}
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg lg:text-2xl font-medium px-3 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								Start Game
							</button>
							{/* Button for pass and play */}
							<button
								type="button"
								onClick={(e) => handleFormSubmit(e, "pnp")}
								className="px-3 py-2 md:px-5 md:py-2.5 border-2 border-white/50 rounded-lg text-lg lg:text-2xl font-medium  bg-gray-800 text-white hover:bg-gray-600 transition-colors"
							>
								Pass n Play
							</button>
						</div>
					</form>
				</div>
			</div>
		</dialog>
	);
};
RoundInputForm.propTypes = {
	setGame: PropTypes.func.isRequired,
	formDisplay: PropTypes.bool.isRequired,
};

export default RoundInputForm;
