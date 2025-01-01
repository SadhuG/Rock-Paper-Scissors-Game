import PropTypes from "prop-types";
const TapToContinueDisplay = ({ display }) => {
	return (
		<div className="flex justify-center h-9">
			{display && <p>Tap To Continue</p>}
		</div>
	);
};
TapToContinueDisplay.propTypes = {
	display: PropTypes.bool,
};
export default TapToContinueDisplay;
