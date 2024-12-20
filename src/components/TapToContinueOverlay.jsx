import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";

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
					className=" absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center"
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
