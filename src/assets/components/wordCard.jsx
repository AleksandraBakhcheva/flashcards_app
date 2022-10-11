import "../styles/wordcard.css";

function WordCard(props) {
    return (
        <div className="wordcard">
            <div className="wordcard__box">
                <h4 className="wordcard__close">X</h4>
                <h4 className="wordcard__language">English</h4>
                <h1 className="wordcard__word">{props.word}</h1>
                <p className="wordcard__transcription">{props.transcription}</p>
                <div className="wordcard__translation">
                    <button>Translate</button>
                </div>

            </div>
        </div>



    );
}

export default WordCard;