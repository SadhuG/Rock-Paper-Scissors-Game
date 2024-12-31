import PropTypes from "prop-types";

import ChoiceSlotDisplay from "./ChoiceSlotDisplay";
import RoundResultCards from "./RoundResultCards";

const UserChoiceDisplay = ({
	userChoice,
	roundResultDisplay,
	roundWonBy,
	computerChoice,
	isAnimating,
	updateScores,
	resultArray,
}) => {
	return (
		<section className="flex flex-col md:flex-row md:justify-center md:items-start items-center gap-4 md:gap-6">
			<div className="flex flex-col items-center gap-1">
				<ChoiceSlotDisplay
					choice={userChoice}
					isAnimating={isAnimating}
					updateScores={updateScores}
					wonBy={roundWonBy}
					player={"player"}
				/>
				<p className="text-white">Player</p>
			</div>

			<div className="flex flex-col items-center justify-center h-28 md:w-40 md:h-40 lg:w-60 lg:h-60">
				{roundResultDisplay ? (
					<RoundResultCards
						roundWonBy={roundWonBy}
						resultArray={resultArray}
					/>
				) : (
					<p className="text-5xl lg:text-8xl font-bold text-white">v/s</p>
				)}
			</div>

			<div className="flex flex-col items-center gap-1">
				<ChoiceSlotDisplay
					choice={computerChoice}
					isAnimating={isAnimating}
					updateScores={updateScores}
					wonBy={roundWonBy}
					player={"computer"}
				/>
				<p className="text-white">Computer</p>
			</div>
		</section>
	);
};

UserChoiceDisplay.propTypes = {
	roundResultDisplay: PropTypes.bool,
	userChoice: PropTypes.string,
	roundWonBy: PropTypes.string,
	computerChoice: PropTypes.string,
	isAnimating: PropTypes.bool,
	updateScores: PropTypes.func,
	resultArray: PropTypes.array,
};
export default UserChoiceDisplay;
