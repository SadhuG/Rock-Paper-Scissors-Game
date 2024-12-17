import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import "./Slot.css";

import Package from "../assets/package.png";
import Paper from "../assets/paper.png";
import Rock from "../assets/rock.png";
import Scissors from "../assets/scissors.png";

const slotTiles = {
	rock: Rock,
	paper: Paper,
	scissors: Scissors,
	package: Package,
};

const slotChoices = {
	rock: Rock,
	paper: Paper,
	scissors: Scissors,
};

const ChoiceSlotDisplay = ({
	choice,
	isAnimating,
	updateScores,
	wonBy,
	player,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	//Gives an array of ['rock','paper',scissors'] for the slot to loop around
	const tiles = Object.keys(slotTiles);
	const slotDisplay = Object.keys(slotChoices);

	// State for border color
	const [borderClr, setBorderClr] = useState("border-zinc-400");

	useEffect(() => {
		let interval;
		if (isAnimating) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % slotDisplay.length);
			}, 300); // Adjust speed as needed
		}
		if (!isAnimating && choice) {
			setCurrentIndex(tiles.indexOf(choice));
			updateScores;

			// Update border colors after the animation is completed
			if (player == "player") {
				switch (wonBy) {
					case "player won":
						return setBorderClr("border-green-500");
					case "computer won":
						return setBorderClr("border-red-400");
					case "It's a tie":
						return setBorderClr("border-amber-500");
					case null:
						return setBorderClr("border-zinc-400");
				}
			}

			if (player == "computer") {
				switch (wonBy) {
					case "computer won":
						return setBorderClr("border-green-500");
					case "player won":
						return setBorderClr("border-red-400");
					case "It's a tie":
						return setBorderClr("border-amber-500");
					case null:
						return setBorderClr("border-zinc-400");
				}
			}
		}
		return () => clearInterval(interval);
	}, [
		isAnimating,
		tiles,
		choice,
		updateScores,
		slotDisplay.length,
		player,
		wonBy,
	]);

	return (
		<div
			className={`flex flex-col items-center justify-center w-30 h-30 border-8 ${borderClr} rounded-3xl overflow-hidden`}
		>
			<div className={`symbol ${isAnimating ? "spinning" : ""}`}>
				<img
					src={slotTiles[tiles[currentIndex]]}
					alt="slot symbol"
				/>
			</div>
		</div>
	);
};

ChoiceSlotDisplay.propTypes = {
	choice: PropTypes.string,
	isAnimating: PropTypes.bool,
	updateScores: PropTypes.func,
	wonBy: PropTypes.string,
	player: PropTypes.string,
};

export default ChoiceSlotDisplay;
