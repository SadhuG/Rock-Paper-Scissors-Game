import { useState } from "react";

const App = () => {
	const [gameType, setGameType] = useState(null);
	const [roundsInput, setRoundsInput] = useState(3);

	function handleFormSubmit(e, gameFlow) {
		e.preventDefault();

		if (gameFlow === "pnp") {
			setGameType(gameFlow);
			startGame();
			console.log("pnp");
			return;
		}

		if (
			roundsInput <= 0 ||
			roundsInput % 1 != 0 ||
			roundsInput === "" ||
			roundsInput >= 100
		) {
			setRoundsInput("");
			alert(
				"Please enter the number of rounds a whole number greater than 0 less than 100 (i.e., 1 to 99) to play"
			);
			return;
		}

		setGameType(gameFlow);
		startGame();
		console.log("rounds:" + roundsInput);
	}

	// Triggers form submission when "Enter" key is pressed in the input field
	// Prevents the "." "-" "+" from getting registered into the input field
	function handleKeyDown(e) {
		if (e.key === "." || e.key === "e" || e.key === "+" || e.key === "-") {
			e.preventDefault();
		}
		if (e.key === "Enter") handleFormSubmit(e, "rounds");
	}

	function startGame() {}

	return (
		<>
			{/* Game start round selection form */}
			<div>
				<p>Hello There</p>
				<p>Enter the number of rounds you want to play or just Pass & Play</p>

				<form>
					<label>
						<span>Enter the number of rounds</span>
						<input
							type="number"
							placeholder="Number of rounds"
							value={roundsInput}
							onChange={(e) => setRoundsInput(e.target.value)}
							onKeyDown={handleKeyDown}
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
			</div>

			{/* Choices display */}
			<p>Player Choice:</p>
			<p>Computer Choice:</p>

			{/* Player Buttons */}
			<button>Rock</button>
			<button>Paper</button>
			<button>Scissors</button>

			{/* Round Display */}
			<div className="flex flex-col items-center">
				<p>Total Rounds :</p>
				<p>Current Round :</p>
				<p>Ties :</p>
				<p>Player Won :</p>
				<p>Computer Won :</p>
			</div>
		</>
	);
};

export default App;
