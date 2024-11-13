const App = () => {
	return (
		<>
			{/* Game start round selection form */}
			<div>
				<p>Hello There</p>
				<p>Enter the number of rounds you want to play or just Pass & Play</p>

				<form>
					<label>
						<span>Enter the number of rounds</span>
						<input
							type="number"
							placeholder="Number of rounds"
						/>
					</label>

					{/* Button for fixed rounds */}
					<button type="button">StartGame</button>

					{/* btn for pass and play */}
					<button type="button">Pass & Play</button>
				</form>
			</div>

			{/* Choices display */}
			<p>Player Choice:</p>
			<p>Computer Choice:</p>

			{/* Player Buttons */}
			<button>Rock</button>
			<button>Paper</button>
			<button>Scissors</button>

			{/* Round Display */}
			<div className="flex flex-col items-center">
				<p>Total Rounds :</p>
				<p>Current Round :</p>
				<p>Ties :</p>
				<p>Player Won :</p>
				<p>Computer Won :</p>
			</div>
		</>
	);
};

export default App;
