import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Paper from "./assets/paper.png";
import Rock from "./assets/rock.png";
import Scissors from "./assets/scissors.png";

const SlotMachine = ({ player, choice, wonBy, rounds }) => {
	const [currentTile, setCurrentTile] = useState(null);
	const [isAnimating, setIsAnimating] = useState(true);
	const [initialAnimation, setInitialAnimation] = useState(true);

	const [borderClr, setBorderClr] = useState("border-zinc-400");

	const choices = { rock: Rock, paper: Paper, scissors: Scissors };
	const tiles = ["rock", "paper", "scissors"];
	const targetTile = tiles.indexOf(choice);

	const duration = 1200;

	const getBorderColor = () => {
		if (player == "player") {
			switch (wonBy) {
				case "player":
					return setBorderClr("border-green-500");
				case "computer":
					return setBorderClr("border-red-400");
				case "tie":
					return setBorderClr("border-amber-500");
			}
		}

		if (player == "computer") {
			switch (wonBy) {
				case "computer":
					return setBorderClr("border-green-500");
				case "player":
					return setBorderClr("border-red-400");
				case "tie":
					return setBorderClr("border-amber-500");
			}
		}
	};

	useEffect(() => {
		if (choice != null) {
			let interval;

			if (initialAnimation) {
				interval = setInterval(() => {
					setBorderClr("border-zinc-400");
					setCurrentTile((prev) => (prev + 1) % tiles.length);
				}, 200);
			} else if (isAnimating) {
				interval = setInterval(() => {
					setCurrentTile((prev) => (prev + 1) % tiles.length);
				}, 400);
			}

			return () => clearInterval(interval);
		}
	}, [choice, isAnimating, initialAnimation, tiles.length]);

	useEffect(() => {
		setInitialAnimation(true);
		setIsAnimating(true);
	}, [rounds]);

	useEffect(() => {
		const initialTimer = setTimeout(() => {
			setInitialAnimation(false);
		}, 1200);

		const finalTimer = setTimeout(() => {
			setIsAnimating(false);
			setCurrentTile(targetTile);
			getBorderColor();
		}, duration);

		return () => {
			clearTimeout(initialTimer);
			clearTimeout(finalTimer);
		};
	}, [initialAnimation, isAnimating, duration, targetTile]);

	return (
		<div className="flex flex-col items-center">
			<div className={`w-40 h-40 border-8 ${borderClr} rounded-3xl`}>
				<img
					src={choices[tiles[currentTile]]}
					alt={choice}
				/>
			</div>
		</div>
	);
};

export default SlotMachine;

SlotMachine.propTypes = {
	player: PropTypes.string,
	choice: PropTypes.string,
	wonBy: PropTypes.string,
	rounds: PropTypes.number,
};
