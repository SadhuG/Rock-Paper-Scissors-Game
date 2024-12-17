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
			<div className="flex flex-col items-center w-28 h-28">
				<ChoiceSlotDisplay
					choice={userChoice}
					isAnimating={isAnimating}
					updateScores={updateScores}
					wonBy={roundWonBy}
					player={"player"}
				/>
			</div>

			<div className="flex flex-col items-center justify-center w-20 h-20">
				<p className="text-5xl font-bold text-white">
					{roundResultDisplay ? roundWonBy : "v/s"}
				</p>
			</div>

			<div className="flex flex-col items-center w-28 h-28">
				<ChoiceSlotDisplay
					choice={computerChoice}
					isAnimating={isAnimating}
					updateScores={updateScores}
					wonBy={roundWonBy}
					player={"computer"}
				/>
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
