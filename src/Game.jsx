import { useState } from "react";

const userChoice = [
	{ value: "rock", text: "rock 🪨" },
	{ value: "paper", text: "paper 📃" },
	{ value: "scissors", text: "scissors ✂️" },
];

const computerChoice = ["rock", "paper", "scissors"];

function Game() {
	const [playerWins, setPlayerWins] = useState(0);
	const [computerWins, setComputerWins] = useState(0);

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
		<section>
			<div>
				{userChoice.map((choice) => {
					return (
						<button
							key={choice.value}
							value={choice.value}
							onClick={(e) => {
								playRound(e.target.value);
							}}
						>
							{choice.text}
						</button>
					);
				})}
			</div>
			Player Won: {playerWins}
			Computer Won: {computerWins}
		</section>
	);
}
export default Game;
