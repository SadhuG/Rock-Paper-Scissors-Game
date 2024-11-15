import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const RoundInputForm = ({ setGame, formDisplay }) => {
	// Form input states
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

	function handleInputChange(e) {
		setRoundsInput(e.target.value);
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
		<dialog ref={inputForm}>
			<p>Hello There</p>
			<p>Enter the number of rounds you want to play or just Pass & Play</p>

			<form>
				<label>
					<span>Enter the number of rounds</span>
					<input
						type="number"
						placeholder="Number of rounds"
						value={roundsInput}
						onChange={handleInputChange}
						onKeyDown={handleInputKeyDown}
					/>
				</label>

				{/* Button for fixed rounds */}
				<button
					type="button"
					onClick={(e) => handleFormSubmit(e, "rounds")}
				>
					StartGame
				</button>

				{/* btn for pass and play */}
				<button
					type="button"
					onClick={(e) => handleFormSubmit(e, "pnp")}
				>
					Pass & Play
				</button>
			</form>
		</dialog>
	);
};
RoundInputForm.propTypes = {
	setGame: PropTypes.func.isRequired,
	formDisplay: PropTypes.bool.isRequired,
};

export default RoundInputForm;
