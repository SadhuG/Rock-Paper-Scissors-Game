import { useEffect, useState } from "react";

import EndGameResult from "./components/EndGameResult";
import ExitGameButtonAndModal from "./components/ExitGameButtonAndModal";
import RoundInputForm from "./components/RoundInputForm";
import RoundsAndScoresDisplay from "./components/RoundsAndScoresDisplay";
import RulesButtonAndModal from "./components/RulesButtonAndModal";
import UserChoiceDisplay from "./components/UserChoiceDisplay";
import UserInputButtons from "./components/UserInputButtons";

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

	// Triggers the slot animation
	const [isAnimating, setAnimating] = useState(false);

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

	const [resultMessage, setResultMessage] = useState();

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

	// Starts the game and enables inputs
	function startGame() {
		currentRoundIncrement();
		setInputDisabled(false);
		setGameStarted(true);
	}

	// Accepts user inputs and plays the game
	function handleUserInput(playerChoice) {
		setUserChoice(playerChoice);
		playRound(playerChoice);
	}

	// Makes an array from the keys of choices object declared at the start of the document and then selects and returns an item from the array as the computer choice using Math.random function
	function generateComputerInput() {
		const choicesArray = Object.keys(choices);
		const randomIndex = Math.floor(Math.random() * choicesArray.length);
		return choicesArray[randomIndex];
	}

	// Runs and manages every single round
	function playRound(playerChoice) {
		// Ensure the game is started and current round is within the total rounds limit
		if (!isGameStarted || currentRound > totalRounds) return;

		// Prepare for the round
		showRoundResultDisplay(false);
		setInputDisabled(true);

		// Generate computer choice and determine the round winner
		const getComputerChoice = generateComputerInput();
		setComputerChoice(getComputerChoice);
		const roundWinner = whoWon(playerChoice, getComputerChoice);
		setRoundWonBy(roundWinner);

		// Log the choices and the winner
		console.log(
			`User choice: ${playerChoice}, Computer choice: ${getComputerChoice}, 
			Winner: ${roundWinner}`
		);

		// Start the animation and handle the post-animation logic
		setAnimating(true);
		setTimeout(() => {
			setAnimating(false);
			showRoundResultDisplay(true);
			setInputDisabled(false);

			// Check if there are more rounds left
			if (currentRound < totalRounds) {
				currentRoundIncrement();
			} else {
				// If it's the last round, finalize the game
				setInputDisabled(true);
				setGameResult(true);
			}
		}, 2010);
	}

	//To ensure that the score states are updated before the game result is displayed
	useEffect(() => {
		if (displayGameResult) {
			getGameWinner();
		}

		return;
		// Exhaustive dependencies are disabled to circumvent linter warnings
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [displayGameResult]);

	// Takes the inputs decides the round winner return's the round winner and updates the score
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

	// Compares the scores to get the winner
	function getGameWinner() {
		setGameResult(true);
		if (userWins === computerWins) {
			setResultMessage(finalMessages["tie"]);
		} else if (userWins > computerWins) {
			setResultMessage(finalMessages["playerWon"]);
		} else {
			setResultMessage(finalMessages["computerWon"]);
		}
	}

	// Handles Game Exit button click
	function exitGame() {
		setGameStarted(false);
		setInputDisabled(true);
		setGameResult(true);
	}

	// Hides the result dialog, resets the states and starts the new game
	function handleResultExit() {
		setGameResult(false);
		resetGameStates();
	}

	function resetGameStates() {
		// Resets all the game states to their initial values
		setGameStarted(false);
		setTotalRounds(100);
		setGameType("pnp");
		setCurrentRound(0);
		setUserWins(0);
		setComputerWins(0);
		setTies(0);
		setUserChoice(null);
		setComputerChoice(null);
		setRoundWonBy(null);
		showRoundResultDisplay(null);

		// Displays the round input form and restarts the game
		setRoundInputFormDisplay(true);
	}

	return (
		<>
			{/* Game start round selection form */}
			<RoundInputForm
				setGame={setGame}
				formDisplay={displayRoundInputForm}
			/>

			{/* Choices display */}
			<UserChoiceDisplay
				userChoice={userChoice}
				roundResultDisplay={roundResultDisplay}
				roundWonBy={roundWonBy}
				computerChoice={computerChoice}
				isAnimating={isAnimating}
			/>

			{/* Player Input/Choice Buttons */}
			<UserInputButtons
				inputDisabled={inputDisabled}
				handleUserInput={handleUserInput}
			/>

			{/* Round and Scores Display */}
			<RoundsAndScoresDisplay
				gameType={gameType}
				isGameStarted={isGameStarted}
				totalRounds={totalRounds}
				currentRound={currentRound}
				ties={ties}
				userWins={userWins}
				computerWins={computerWins}
			/>

			{/* End Game Display */}
			<EndGameResult
				displayGameResult={displayGameResult}
				resultMessage={resultMessage}
				handleResultExit={handleResultExit}
			/>

			{/* Rules and Exit Game buttons */}
			<RulesButtonAndModal />
			<ExitGameButtonAndModal
				gameType={gameType}
				exitGame={exitGame}
			/>
		</>
	);
};

export default App;
