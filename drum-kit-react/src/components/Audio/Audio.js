const Audio = (props) => {
	return (
		<div>
          {props.soundKeys.map(key => {
               return (
               <audio
                    data-key={key.value}
                    src={`../../sounds/${key.sound}.wav`}
               />
               );
          })}
		</div>
	);
};

export default Audio;
