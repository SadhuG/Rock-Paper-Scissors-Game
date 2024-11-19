import PropTypes from "prop-types";
const RoundsAndScoresDisplay = ({
	gameType,
	isGameStarted,
	totalRounds,
	currentRound,
	ties,
	userWins,
	computerWins,
}) => {
	return (
		<div className="flex flex-col items-center">
			<p>
				{isGameStarted &&
					`Game Type: ${gameType === "rounds" ? "Rounds" : "Pass n Play"}`}
			</p>
			<p>
				{gameType === "rounds" &&
					`Total Rounds:${isGameStarted && totalRounds}`}
			</p>
			<p>Current Round:{currentRound}</p>
			<p>Ties:{ties}</p>
			<p>Player Won:{userWins}</p>
			<p>Computer Won:{computerWins}</p>
		</div>
	);
};

RoundsAndScoresDisplay.propTypes = {
	gameType: PropTypes.string,
	isGameStarted: PropTypes.bool,
	totalRounds: PropTypes.number,
	currentRound: PropTypes.number,
	ties: PropTypes.number,
	userWins: PropTypes.number,
	computerWins: PropTypes.number,
};
export default RoundsAndScoresDisplay;
