import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";

import "./TTC.css";

const TapToContinueOverlay = ({ display, ttcFunction }) => {
	const overlay = useRef(null);
	const [displayOverlay, setOverlay] = useState(false);

	useEffect(() => {
		if (display) {
			setOverlay(true);
		} else {
			setOverlay(false);
		}
	}, [display]);

	return (
		<>
			{displayOverlay && (
				<div
					ref={overlay}
					className="overlay"
					onClick={ttcFunction}
				></div>
			)}
		</>
	);
};

TapToContinueOverlay.propTypes = {
	display: PropTypes.bool,
	ttcFunction: PropTypes.func,
};
export default TapToContinueOverlay;
