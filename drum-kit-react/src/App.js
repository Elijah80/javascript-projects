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
		{ value: 76, letter: "L", sound: "tink" }
	];

	return (
		<div>
			<Key keys={keyValues} />
		</div>
	);
}

export default App;
