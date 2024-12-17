import PropTypes from "prop-types";

import Paper from "../assets/paper.png";
import Rock from "../assets/rock.png";
import Scissors from "../assets/scissors.png";

const UserInputButtons = ({ inputDisabled, handleUserInput }) => {
	return (
		<div className="flex gap-8">
			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("rock")}
				className={`w-20 h-20 border-8 ${
					inputDisabled && `border-teal-800 bg-teal-800/25`
				} border-teal-400 bg-teal-400/25 rounded-full p-2`}
			>
				<img
					src={Rock}
					alt="Rock Button"
					className={inputDisabled && `opacity-50`}
				/>
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("paper")}
				className={`w-20 h-20 border-8 ${
					inputDisabled && `border-sky-800 bg-sky-800/25`
				} border-sky-400 bg-sky-400/25 rounded-full p-2 `}
			>
				<img
					src={Paper}
					alt="Paper Button"
					className={inputDisabled && `opacity-50`}
				/>
			</button>

			<button
				disabled={inputDisabled}
				onClick={() => handleUserInput("scissors")}
				className={`w-20 h-20 border-8 ${
					inputDisabled && `border-indigo-800 bg-indigo-800/25`
				} border-indigo-400 bg-indigo-400/25 rounded-full p-2 `}
			>
				<img
					src={Scissors}
					alt="Scissors Button"
					className={inputDisabled && `opacity-50`}
				/>
			</button>
		</div>
	);
};

UserInputButtons.propTypes = {
	inputDisabled: PropTypes.bool,
	handleUserInput: PropTypes.func,
};

export default UserInputButtons;
