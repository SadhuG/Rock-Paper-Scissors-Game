import PropTypes from "prop-types";

import ChoiceSlotDisplay from "./ChoiceSlotDisplay";

const UserChoiceDisplay = ({
	userChoice,
	roundResultDisplay,
	roundWonBy,
	computerChoice,
	isAnimating,
	updateScores,
}) => {
	return (
		<section className="flex flex-col items-center gap-4">
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

			<div className="flex flex-col items-center justify-center h-20">
				<p className="text-5xl font-bold text-white">
					{roundResultDisplay ? roundWonBy : "v/s"}
				</p>
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
};
export default UserChoiceDisplay;
