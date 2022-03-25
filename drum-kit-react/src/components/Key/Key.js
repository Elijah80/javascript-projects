import { createRef } from "react";
import styles from "./Key.module.css";

const Key = (props) => {
	let audio = createRef();

	const playSound = () => {
		audio.current.play();
		audio.current.currentTime = 0;
	}

	window.addEventListener('keydown', (e) => {
		if (e === props.value) {
			playSound();
		}
	});

	return (
		<div className={styles.keys}>

			{props.keys.map((key) => {
				return (
					<div key={key.value} className={styles.key} data-key={key.value}>
						<kbd>{key.letter}</kbd>
						<span className={styles.sound}>{key.sound}</span>
						<audio ref={audio} className="clip" id={key.value} src={key.url} />
					</div>
				);
			})}
		</div>
	);
};

export default Key;
