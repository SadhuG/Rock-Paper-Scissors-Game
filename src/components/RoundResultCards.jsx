import PropTypes from "prop-types";

const RoundResultCards = ({ roundWonBy, resultImage }) => {
	const resultArray = [
		{
			text: "Player Wins!",
			image: resultImage.playerWins,
			backgroundGradient: "bg-gradient-to-b from-green-300",
		},
		{
			text: "Computer Wins!",
			image: resultImage.computerWins,
			backgroundGradient: "bg-gradient-to-b from-red-300",
		},
		{
			text: "It's a Tie!",
			image: resultImage.tie,
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
	resultImage: PropTypes.object,
};
export default RoundResultCards;
