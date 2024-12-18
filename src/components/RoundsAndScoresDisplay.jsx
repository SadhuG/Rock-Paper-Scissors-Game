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
		<div className="flex flex-col items-center gap-2">
			<div>
				{isGameStarted && (
					<p>
						Game Type:
						<span className="text-white">
							{gameType === "rounds" ? " Rounds" : " Pass n Play"}
						</span>
					</p>
				)}
			</div>

			{gameType === "rounds" && (
				<p>
					Total Rounds:
					<span className="text-white">{isGameStarted && totalRounds}</span>
				</p>
			)}

			<p>
				Current Round:
				<span className="text-white"> {currentRound}</span>
			</p>
			<p>
				Ties:<span className="text-white"> {ties}</span>
			</p>
			<p>
				Player Won:<span className="text-white"> {userWins}</span>
			</p>
			<p>
				Computer Won:<span className="text-white"> {computerWins}</span>
			</p>
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
