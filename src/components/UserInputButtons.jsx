import PropTypes from "prop-types";
const UserInputButtons = ({ inputDisabled, handleUserInput }) => {
	return (
		<div>
			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("rock")}
			>
				Rock
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("paper")}
			>
				Paper
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("scissors")}
			>
				Scissors
			</button>
		</div>
	);
};
UserInputButtons.propTypes = {
	inputDisabled: PropTypes.bool,
	handleUserInput: PropTypes.func,
};
export default UserInputButtons;
