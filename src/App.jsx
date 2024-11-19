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

	// Round Choice states
	// Choices are drilled down as parameters to functions, the "user" and "computer" "choice" states are used to update displays
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);

	// Round Results and display updated each round
	const [roundWonBy, setRoundWonBy] = useState(null);
	const [roundResultDisplay, showRoundResultDisplay] = useState(false);

	// State to trigger game result display
	const [displayGameResult, setGameResult] = useState(false);

	// Final Result Messages and a state to display them
	const finalMessages = {
		playerWon: {
			title: "Yay you won",
			message: "Wanna continue this winning streak",
			buttonText: "Play again",
		},
		computerWon: {
			title: "You Lost",
			message: "Don't loose hope we're rooting for you",
			buttonText: "start again",
		},
		tie: {
			title: "It's a Tie",
			message: "We wish you all the best",
			buttonText: "try again",
		},
	};

	const [showFinalMessage, setFinalMessage] = useState();

	// Increment current round by one
	function currentRoundIncrement() {
		setCurrentRound((currentRound) => currentRound + 1);
	}

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
		currentRoundIncrement();
		setInputDisabled(false);
		setGameStarted(true);
	}

	function handleUserInput(playerChoice) {
		setUserChoice(playerChoice);
		playRound(playerChoice);
	}

	function generateComputerInput() {
		const choicesArray = Object.keys(choices);
		const randomIndex = Math.floor(Math.random() * choicesArray.length);
		return choicesArray[randomIndex];
	}

	function playRound(playerChoice) {
		if (isGameStarted && currentRound <= totalRounds) {
			setInputDisabled(true);
			const getComputerChoice = generateComputerInput();
			setComputerChoice(getComputerChoice);
			const roundWinner = whoWon(playerChoice, getComputerChoice);
			setRoundWonBy(roundWinner);
			showRoundResultDisplay(true);
			console.log(`user choice ${playerChoice}, computer choice ${getComputerChoice}
			winner: ${roundWinner}`);
			setInputDisabled(false);
			if (currentRound < totalRounds) {
				currentRoundIncrement();
			}
			if (currentRound == totalRounds) {
				setGameStarted(false);
				setInputDisabled(true);
				setGameResult(true);
				endGame();
			}
		}
	}

	function whoWon(playerInput, computerInput) {
		if (playerInput === computerInput) {
			setTies((ties) => ties + 1);
			return "It's a tie";
		} else if (
			(playerInput === "rock" && computerInput === "scissors") ||
			(playerInput === "paper" && computerInput === "rock") ||
			(playerInput === "scissors" && computerInput === "paper")
		) {
			setUserWins((playerWins) => playerWins + 1);
			return "player won";
		} else {
			setComputerWins((computerWins) => computerWins + 1);
			return "computer won";
		}
	}

	function endGame() {
		setGameResult(true);
		if (userWins === computerWins) {
			setFinalMessage(finalMessages["tie"]);
		} else if (userWins > computerWins) {
			setFinalMessage(finalMessages["playerWon"]);
		} else {
			setFinalMessage(finalMessages["computerWon"]);
		}
	}

	return (
		<>
			{/* Game start round selection form */}
			<RoundInputForm
				setGame={setGame}
				formDisplay={displayRoundInputForm}
			/>

			{/* Choices display */}
			<p>Player Choice:{userChoice}</p>
			<p>{roundResultDisplay ? roundWonBy : "v/s"}</p>
			<p>Computer Choice:{computerChoice}</p>

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
				<p>Current Round:{currentRound}</p>
				<p>Ties:{ties}</p>
				<p>Player Won:{userWins}</p>
				<p>Computer Won:{computerWins}</p>
			</div>

			{/* End Game Display */}
			
		</>
	);
};

export default App;
