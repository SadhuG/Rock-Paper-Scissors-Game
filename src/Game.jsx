import { useState } from "react";
import SlotMachine from "./slot";

import Paper from "./assets/paper.png";
import Rock from "./assets/rock.png";
import Scissors from "./assets/scissors.png";

const choices = { rock: Rock, paper: Paper, scissors: Scissors };

const Game = () => {
	const [totalRounds, setTotalRounds] = useState(0);
	const [playerWins, setPlayerWins] = useState(0);
	const [computerWins, setComputerWins] = useState(0);
	const [ties, setTies] = useState(0);

	const [playerChoice, setPlayerChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [roundWonBy, setRoundWonBy] = useState(null);

	const getRandomChoice = () => {
		const choicesArray = Object.keys(choices);
		const randomIndex = Math.floor(Math.random() * choicesArray.length);
		return choicesArray[randomIndex];
	};

	const handleClick = (choice) => {
		const playerChose = choice;
		const computerChose = getRandomChoice();
		setPlayerChoice(playerChose);
		setComputerChoice(computerChose);
		const whoWon = playRound(playerChose, computerChose);
		setRoundWonBy(whoWon);
	};

	const playRound = (user, computer) => {
		if (user == computer) {
			setTies((ties) => ties + 1);
			setTotalRounds((totalRounds) => totalRounds + 1);
			return "tie";
		} else if (user == "rock") {
			if (computer == "paper") {
				setComputerWins((computerWins) => computerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);
				return "computer";
			} else if (computer == "scissors") {
				setPlayerWins((playerWins) => playerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);
				return "player";
			}
		} else if (user == "paper") {
			if (computer == "scissors") {
				setComputerWins((computerWins) => computerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);

				return "computer";
			} else if (computer == "rock") {
				setPlayerWins((playerWins) => playerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);
				return "player";
			}
		} else if (user == "scissors") {
			if (computer == "rock") {
				setComputerWins((computerWins) => computerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);

				return "computer";
			} else if (computer == "paper") {
				setPlayerWins((playerWins) => playerWins + 1);
				setTotalRounds((totalRounds) => totalRounds + 1);
				return "player";
			}
		}
	};

	return (
		<section className="h-screen flex flex-col justify-center items-center gap-8 max-[500px]:gap-4">
			<div className="flex items-center max-[500px]:flex-col gap-8 max-[500px]:gap-4">
				<div className="flex flex-col items-center">
					<SlotMachine
						player={"player"}
						choice={playerChoice}
						wonBy={roundWonBy}
						rounds={totalRounds}
					/>
					<p>Player</p>
				</div>

				<p className="text-neutral-50">v/s</p>

				<div className="flex flex-col items-center">
					<SlotMachine
						player={"computer"}
						choice={computerChoice}
						wonBy={roundWonBy}
						rounds={totalRounds}
					/>
					<p>Computer</p>
				</div>
			</div>

			{/* User Input Buttons */}
			<div className="flex gap-8">
				<button
					onClick={() => {
						handleClick("rock");
					}}
					className="w-20 h-20 border-8 border-teal-400 bg-teal-400/25 rounded-full p-2"
				>
					<img
						src={Rock}
						alt=""
					/>
				</button>

				<button
					onClick={() => {
						handleClick("paper");
					}}
					className="w-20 h-20 border-8 border-sky-400 bg-sky-400/25 rounded-full p-2 "
				>
					<img
						src={Paper}
						alt=""
					/>
				</button>

				<button
					onClick={() => {
						handleClick("scissors");
					}}
					className="w-20 h-20 border-8 border-indigo-400 bg-indigo-400/25 rounded-full p-2 "
				>
					<img
						src={Scissors}
						alt=""
					/>
				</button>
			</div>

			<div className="flex flex-col items-center">
				<p>
					Current Round: <span className="text-neutral-50">{totalRounds}</span>
				</p>
				<p>
					Ties: <span className="text-neutral-50">{ties}</span>
				</p>
				<p>
					Player Won: <span className="text-neutral-50">{playerWins}</span>
				</p>
				<p>
					Computer Won: <span className="text-neutral-50">{computerWins}</span>
				</p>
			</div>
		</section>
	);
};
export default Game;
