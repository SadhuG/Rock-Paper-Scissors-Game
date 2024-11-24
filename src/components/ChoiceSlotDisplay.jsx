import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import "./Slot.css";

import Paper from "../assets/paper.png";
import Rock from "../assets/rock.png";
import Scissors from "../assets/scissors.png";

const slotChoices = { rock: Rock, paper: Paper, scissors: Scissors };

const ChoiceSlotDisplay = ({ choice, isAnimating, updateScores }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	//Gives an array of ['rock','paper',scissors'] for the slot to loop around
	const tiles = Object.keys(slotChoices);

	useEffect(() => {
		let interval;
		if (isAnimating) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % tiles.length);
			}, 300); // Adjust speed as needed
		}
		if (!isAnimating && choice) {
			setCurrentIndex(tiles.indexOf(choice));
			updateScores;
		}
		return () => clearInterval(interval);
	}, [isAnimating, tiles, choice, updateScores]);

	return (
		<div className="slot">
			<div className={`symbol ${isAnimating ? "spinning" : ""}`}>
				<img
					src={slotChoices[tiles[currentIndex]]}
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
};

export default ChoiceSlotDisplay;
