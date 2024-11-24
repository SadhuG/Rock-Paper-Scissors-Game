import PropTypes from "prop-types";
import ChoiceSlotDisplay from "./ChoiceSlotDisplay";
const UserChoiceDisplay = ({
	userChoice,
	roundResultDisplay,
	roundWonBy,
	computerChoice,
	isAnimating,
}) => {
	return (
		<>
			<ChoiceSlotDisplay
				choice={userChoice}
				isAnimating={isAnimating}
			/>
			<p>Player Choice:{userChoice}</p>
			<p>{roundResultDisplay ? roundWonBy : "v/s"}</p>
			<p>Computer Choice:{computerChoice}</p>
		</>
	);
};
UserChoiceDisplay.propTypes = {
	roundResultDisplay: PropTypes.bool,
	userChoice: PropTypes.string,
	roundWonBy: PropTypes.string,
	computerChoice: PropTypes.string,
	isAnimating: PropTypes.bool,
};
export default UserChoiceDisplay;
