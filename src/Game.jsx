import { useState } from "react";
import Paper from "./assets/paper.png";
import Rock from "./assets/rock.png";
import Scissors from "./assets/scissors.png";

const computerChoice = ["rock", "paper", "scissors"];

function Game() {
	const [playerWins, setPlayerWins] = useState(0);
	const [computerWins, setComputerWins] = useState(0);
	const [ties, setTies] = useState(0);

	function getComputerChoice() {
		return computerChoice[Math.floor(Math.random() * computerChoice.length)];
	}

	function playRound(userChose) {
		const userChoice = userChose;
		const computerChoice = getComputerChoice();
		const roundWinner = determineRoundWinner(userChoice, computerChoice);

		console.log(`User Chose: ${userChoice}
Computer Chose: ${computerChoice}
Who Won: ${roundWinner}`);
	}

	function determineRoundWinner(userChoice, computerChoice) {
		if (userChoice == computerChoice) {
			setTies((ties) => ties + 1);
			return "It's a tie, try again";
		} else if (userChoice == "rock") {
			if (computerChoice == "paper") {
				setComputerWins((computerWins) => computerWins + 1);
				return "Computer Wins";
			} else if (computerChoice == "scissors") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "User Wins";
			}
		} else if (userChoice == "paper") {
			if (computerChoice == "scissors") {
				setComputerWins((computerWins) => computerWins + 1);

				return "Computer Wins";
			} else if (computerChoice == "rock") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "User Wins";
			}
		} else if (userChoice == "scissors") {
			if (computerChoice == "rock") {
				setComputerWins((computerWins) => computerWins + 1);

				return "Computer Wins";
			} else if (computerChoice == "paper") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "User Wins";
			}
		}
	}

	return (
		<section className="h-screen flex flex-col justify-center items-center gap-8 max-[500px]:gap-4">
			<div className="flex items-center max-[500px]:flex-col gap-8 max-[500px]:gap-4">
				<div className="flex flex-col items-center">
					<div className="w-40 h-40 border-4 border-zinc-400 rounded-3xl"></div>
					<p>Player</p>
				</div>

				<p className="text-neutral-50">v/s</p>
				<div className="flex flex-col items-center">
					<div className="w-40 h-40 border-4 border-zinc-400 rounded-3xl"></div>
					<p>Computer</p>
				</div>
			</div>

			{/* User Input Buttons */}
			<div className="flex gap-8">
				<button
					onClick={() => {
						playRound("rock");
					}}
					className="w-16 h-16 border-8 border-orange-400 bg-orange-400/25 rounded-full p-2"
				>
					<img
						src={Rock}
						alt=""
					/>
				</button>

				<button
					onClick={() => {
						playRound("paper");
					}}
					className="w-16 h-16 border-8 border-teal-400 bg-teal-400/25 rounded-full p-2 "
				>
					<img
						src={Paper}
						alt=""
					/>
				</button>

				<button
					onClick={() => {
						playRound("scissors");
					}}
					className="w-16 h-16 border-8 border-violet-400 bg-violet-400/25 rounded-full p-2 "
				>
					<img
						src={Scissors}
						alt=""
					/>
				</button>
			</div>

			<div className="flex flex-col items-center">
				<p>
					Is a Tie: <span className="text-neutral-50">{ties}</span>
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
}
export default Game;
