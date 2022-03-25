import Key from "./components/Key/Key";

function App() {
	const keyValues = [
		{ value: 65, letter: "A", sound: "clap" },
		{ value: 83, letter: "S", sound: "hihat" },
		{ value: 68, letter: "D", sound: "kick" },
		{ value: 70, letter: "F", sound: "openhat" },
		{ value: 71, letter: "G", sound: "boom" },
		{ value: 72, letter: "H", sound: "ride" },
		{ value: 74, letter: "J", sound: "snare" },
		{ value: 75, letter: "K", sound: "tom" },
		{ value: 76, letter: "L", sound: "tink" },
    {}
	];

	return (
		<div>
			<Key keys={keyValues} />
			<audio data-key="65" src="sounds/clap.wav"></audio>
			<audio data-key="83" src="sounds/hihat.wav"></audio>
			<audio data-key="68" src="sounds/kick.wav"></audio>
			<audio data-key="70" src="sounds/openhat.wav"></audio>
			<audio data-key="71" src="sounds/boom.wav"></audio>
			<audio data-key="72" src="sounds/ride.wav"></audio>
			<audio data-key="74" src="sounds/snare.wav"></audio>
			<audio data-key="75" src="sounds/tom.wav"></audio>
			<audio data-key="76" src="sounds/tink.wav"></audio>
		</div>
	);
}

export default App;
