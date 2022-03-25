import Key from "./components/Key/Key";

function App() {
	const keyValues = [
		{ value: 65, letter: "A", sound: "clap", url: "../../sounds/clap.wav" },
		{ value: 83, letter: "S", sound: "hihat", url: "../../sounds/hihat.wav" },
		{ value: 68, letter: "D", sound: "kick", url: "../../sounds/kick.wav" },
		{ value: 70, letter: "F", sound: "openhat", url: "../../sounds/openhat.wav" },
		{ value: 71, letter: "G", sound: "boom", url: "../../sounds/boom.wav" },
		{ value: 72, letter: "H", sound: "ride", url: "../../sounds/ride.wav" },
		{ value: 74, letter: "J", sound: "snare", url: "../../sounds/snare.wav" },
		{ value: 75, letter: "K", sound: "tom", url: "../../sounds/tom.wav" },
		{ value: 76, letter: "L", sound: "tink", url: "../../sounds/tink.wav" },
	];

	return <Key keys={keyValues} />;
}

export default App;
