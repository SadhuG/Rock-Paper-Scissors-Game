import PropTypes from "prop-types";
const RoundResultCards = ({ roundWonBy }) => {
	const resultArray = [
		{
			text: "Player Wins!",
			image: (
				<img
					src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20in%20Tuxedo.png"
					alt="Person in Tuxedo"
					className="h-[70%]"
				/>
			),
			backgroundGradient: "bg-gradient-to-b from-green-300",
		},
		{
			text: "Computer Wins!",
			image: (
				<img
					src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
					alt="Robot"
					className="h-[70%]"
				/>
			),
			backgroundGradient: "bg-gradient-to-b from-red-300",
		},
		{
			text: "It's a Tie!",
			image: (
				<img
					src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
					alt="Handshake"
					className="h-[70%]"
				/>
			),
			backgroundGradient: "bg-gradient-to-b from-amber-300",
		},
	];

	const result = resultArray.find((result) => result.text === roundWonBy);

	return (
		<div
			className={`flex flex-col items-center h-full rounded-3xl p-4 ${result.backgroundGradient}`}
		>
			{result.image && result.image}
			<p className="text-white font-medium text-center">{result.text}</p>
		</div>
	);
};
RoundResultCards.propTypes = {
	roundWonBy: PropTypes.string,
};
export default RoundResultCards;
