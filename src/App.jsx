import { useState } from "react";
import RoundInputForm from "./components/RoundInputForm";

const choices = { rock: "Rock", paper: "Paper", scissors: "Scissors" };
const App = () => {
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
			<RoundInputForm setGame={setGame} />

			{/* Choices display */}
			<p>Player Choice:</p>
			<p>Computer Choice:</p>

			{/* Player Buttons */}
			<button onClick={() => handleUserInput("rock")}>Rock</button>
			<button onClick={() => handleUserInput("paper")}>Paper</button>
			<button onClick={() => handleUserInput("scissors")}>Scissors</button>

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
