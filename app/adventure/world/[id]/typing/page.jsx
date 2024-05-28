'use client'
import { useEffect, useState } from "react";
import '@/app/typing.css';
import '@/app/globals.css';
import PlayGame from "./PlayGame";
import EndGame from "./EndGame";
import Home from "./Home";
import NavBar from "@/app/_components/NavBar";

const Page = ({ params }) => {

    const [statusGame, setStatusGame] = useState(null);
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (statusGame === 'playing') {
            setScore({
                right: 0,
                wrong: 0
            });
            // run timeout 60s end game
            const timeOutGame = setTimeout(() => {
                setStatusGame('endGame');
            }, 60000);
            return () => clearTimeout(timeOutGame);
        }
    }, [statusGame])


    const handleChangeStatusGame = (status = 'playing') => {
        setStatusGame(status);
    }
    const handleChangeScore = (type = 1) => {
        if (type === 1) {
            setScore({
                ...score,
                right: score.right + 1
            });
        } else {
            setScore({
                ...score,
                wrong: score.wrong + 1
            });
        }
    }


    let showMain;
    switch (statusGame) {
        case 'playing':
            showMain = <PlayGame onGame={handleChangeStatusGame} onChangeScore={handleChangeScore} />
            break;
        case 'endGame':
            showMain = <EndGame onGame={handleChangeStatusGame} score={score} />
            break;
        default:
            showMain = <Home onGame={handleChangeStatusGame} />
            break;
    }

    return (
        <div className="fondo">
            <NavBar />
            <div className="App">
                {showMain}
            </div>
        </div>
    )
}

export default Page