import PropTypes from "prop-types";
const RoundResultCards = ({ roundWonBy, resultArray }) => {
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
	resultArray: PropTypes.array,
};
export default RoundResultCards;
