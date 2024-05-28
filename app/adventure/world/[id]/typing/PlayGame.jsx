import { useEffect, useState } from "react";
const PlayGame = ({ onGame, onChangeScore }) => {
    const [defaultData] = useState('Poncho se fue a caminar, pero un dictamen adelante de el se iba a encontrar. Corrio para lograr escapar, pero una inscripcion a creditos lo iba a detener. Salir de Batiz debia de hacer, pero un examen de matematicas lo iba a detener');
    const [dataTyping, setDataTyping] = useState([]);
    const [textTyping, setTextTyping] = useState({
        value: '',
        position: 0
    });

    useEffect(() => {
        const addWord = () => {
            const arrayDefaultData = defaultData.split(' ');
            const gamingText = arrayDefaultData.map(word => ({ value: word, status: null }));
            setDataTyping(gamingText);
        }

        if (dataTyping.length === 0) {
            addWord();
        } else if (textTyping.position > (dataTyping.length - 1)) {
            // Si llegamos al final del texto, pasamos a la pantalla de EndGame
            if (textTyping.position === dataTyping.length) {
                onGame('endGame');
            } else {
                setTextTyping({ ...textTyping, position: 0 });
            }
        }
    }, [textTyping.position]);

    const handleChangeTyping = e => {
        const valueInput = e.target.value;
        if (!valueInput.includes(' ')) {
            setTextTyping({ ...textTyping, value: valueInput });
        } else if (textTyping.value !== '') {
            checkResult();
        }
    }

    const checkResult = () => {
        const dataCheck = dataTyping;
        if (textTyping.value === dataCheck[textTyping.position].value) {
            dataCheck[textTyping.position].status = true;
            onChangeScore(1);
        } else {
            dataCheck[textTyping.position].status = false;
            onChangeScore(-1);
        }
        setDataTyping(dataCheck);
        setTextTyping({ value: '', position: textTyping.position + 1 });
    }
    return (
        <div className="grid grid-rows-2 h-full p-14 text-center gap-3 playing">
            <ul className="list p-14 text-left rounded-xl">
                {
                    (dataTyping).map((word, index) =>
                        <li key={index} className={
                            word.status === true
                                ? 'true'
                                : word.status === false
                                    ? 'false'
                                    : ''
                        }>
                            {word.value}
                        </li>
                    )
                }
            </ul>
            <div className="inputForm">
                <input type="text" autoFocus value={textTyping.value} onChange={handleChangeTyping} />
            </div>
        </div>
    )
}
export default PlayGame;