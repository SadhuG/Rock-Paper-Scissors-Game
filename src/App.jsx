import { useState } from "react";
import RoundInputForm from "./components/RoundInputForm";

const choices = { rock: "Rock", paper: "Paper", scissors: "Scissors" };
const App = () => {
	// Controls the display of round input form modal
	const [displayRoundInputForm, setRoundInputFormDisplay] = useState(true);
	// Sets if the game has started
	const [isGameStarted, setGameStarted] = useState(false);

	// Enables and disables user input buttons
	const [inputDisabled, setInputDisabled] = useState(true);

	// Game States
	const [totalRounds, setTotalRounds] = useState(100);
	const [gameType, setGameType] = useState("pnp");

	// Round States
	const [currentRound, setCurrentRound] = useState(0);
	const [userWins, setUserWins] = useState(0);
	const [computerWins, setComputerWins] = useState(0);
	const [ties, setTies] = useState(0);

	// Round Choice Inputs
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);

	// Round Results
	const [roundWonBy, setRoundWonBy] = useState(null);

	// Callback from RoundInputForm to set Game Type and Total Rounds
	function setGame(gameTypeInput, roundsInput) {
		// This sets the form state to "false" so that the next time form can be shown only by changing this state to "true"
		setRoundInputFormDisplay(false);

		// Starts the game i.e, enabling inputs and updating rounds
		startGame();

		// Rounds game type handled
		if (gameTypeInput === "rounds") {
			setGameType(gameTypeInput);
			setTotalRounds(roundsInput);
			return;
		}

		// Pass n Play handled where default state of total rounds is used in game instead of round input
		setGameType(gameTypeInput);
		return;
	}

	function startGame() {
		setInputDisabled(false);
		setGameStarted(true);
	}

	function handleUserInput(input) {
		setUserChoice(input);
		console.log(input);
	}

	function generateComputerInput() {
		const choicesArray = Object.keys(choices);
		const randomIndex = Math.floor(Math.random() * choicesArray.length);
		return choicesArray[randomIndex];
	}

	return (
		<>
			{/* Game start round selection form */}
			<RoundInputForm
				setGame={setGame}
				formDisplay={displayRoundInputForm}
			/>

			{/* Choices display */}
			<p>Player Choice:</p>
			<p>Computer Choice:</p>

			{/* Player Input/Choice Buttons */}
			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("rock")}
			>
				Rock
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("paper")}
			>
				Paper
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("scissors")}
			>
				Scissors
			</button>

			{/* Round Display */}
			<div className="flex flex-col items-center">
				{gameType === "rounds" && (
					<p>Total Rounds:{isGameStarted && totalRounds}</p>
				)}
				<p>Current Round:{isGameStarted ? 1 : 0}</p>
				<p>Ties:{ties}</p>
				<p>Player Won:{userWins}</p>
				<p>Computer Won:{computerWins}</p>
			</div>
		</>
	);
};

export default App;
