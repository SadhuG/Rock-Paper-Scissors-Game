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
		<>
			<ChoiceSlotDisplay
				choice={userChoice}
				isAnimating={isAnimating}
				updateScores={updateScores}
			/>
			<p>Player Choice {userChoice == "package" ? "" : `: ${userChoice}`}</p>

			<p>{roundResultDisplay ? roundWonBy : "v/s"}</p>

			<ChoiceSlotDisplay
				choice={computerChoice}
				isAnimating={isAnimating}
				updateScores={updateScores}
			/>
			<p>
				Computer Choice{" "}
				{computerChoice == "package" ? "" : `: ${computerChoice}`}
			</p>
		</>
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
