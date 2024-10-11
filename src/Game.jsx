import { useState } from "react";
import Paper from "./assets/paper.png";
import Rock from "./assets/rock.png";
import Scissors from "./assets/scissors.png";

const choices = { rock: Rock, paper: Paper, scissors: Scissors };

function Game() {
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

	const getPlayerBorderColor = () => {
		switch (roundWonBy) {
			case "player":
				return "border-green-500";
			case "computer":
				return "border-red-400";
			case "tie":
				return "border-amber-500";
			default:
				return "border-zinc-400";
		}
	};

	const getComputerBorderColor = () => {
		switch (roundWonBy) {
			case "computer":
				return "border-green-500";
			case "player":
				return "border-red-400";
			case "tie":
				return "border-amber-500";
			default:
				return "border-zinc-400";
		}
	};

	const playRound = (user, computer) => {
		if (user == computer) {
			setTies((ties) => ties + 1);
			return "tie";
		} else if (user == "rock") {
			if (computer == "paper") {
				setComputerWins((computerWins) => computerWins + 1);
				return "computer";
			} else if (computer == "scissors") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "player";
			}
		} else if (user == "paper") {
			if (computer == "scissors") {
				setComputerWins((computerWins) => computerWins + 1);

				return "computer";
			} else if (computer == "rock") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "player";
			}
		} else if (user == "scissors") {
			if (computer == "rock") {
				setComputerWins((computerWins) => computerWins + 1);

				return "computer";
			} else if (computer == "paper") {
				setPlayerWins((playerWins) => playerWins + 1);
				return "player";
			}
		}
	};

	return (
		<section className="h-screen flex flex-col justify-center items-center gap-8 max-[500px]:gap-4">
			<div className="flex items-center max-[500px]:flex-col gap-8 max-[500px]:gap-4">
				<div className="flex flex-col items-center">
					<div
						className={`w-40 h-40 border-8 ${getPlayerBorderColor()} rounded-3xl`}
					>
						{playerChoice && (
							<img
								src={choices[playerChoice]}
								alt={playerChoice}
							/>
						)}
					</div>
					<p>Player</p>
				</div>

				<p className="text-neutral-50">v/s</p>
				<div className="flex flex-col items-center">
					<div
						className={`w-40 h-40 border-8 ${getComputerBorderColor()} rounded-3xl`}
					>
						{computerChoice && (
							<img
								src={choices[computerChoice]}
								alt={computerChoice}
							/>
						)}
					</div>
					<p>Computer</p>
				</div>
			</div>

			{/* User Input Buttons */}
			<div className="flex gap-8">
				<button
					onClick={() => {
						handleClick("rock");
					}}
					className="w-20 h-20 border-8 border-orange-400 bg-orange-400/25 rounded-full p-2"
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
					className="w-20 h-20 border-8 border-teal-400 bg-teal-400/25 rounded-full p-2 "
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
					className="w-20 h-20 border-8 border-violet-400 bg-violet-400/25 rounded-full p-2 "
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
