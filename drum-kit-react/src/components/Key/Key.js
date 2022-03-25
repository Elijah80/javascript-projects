import Audio from '../Audio/Audio';
import styles from './Key.module.css';

const Key = (props) => {
	return (
	<div className={styles.keys}>
		{props.keys.map(key => {
			return (
				<div className={styles.key} data-key={key.value}>
					<kbd>{key.letter}</kbd>
					<span className={styles.sound}>{key.sound}</span>
				</div>
			)
		})}

		<Audio soundKeys={props.keys} />
	</div>
	);
};

export default Key;