import { motion } from 'framer-motion'

const EndGame = ({ score, onGame }) => {

    return (
        <div className="endGame">
            <div className="result">
                <div>
                    <div className="title">
                        Respuestas Correctas
                    </div>
                    <div className="number">
                        {score.right}
                    </div>
                </div>
                <div>
                    <div className="title">
                        Respuestas Incorrectas
                    </div>
                    <div className="number">
                        {score.wrong}
                    </div>
                </div>
            </div>

            <motion.button onClick={ () => onGame('playing') } className="focus:outline-none text-white bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary w-full font-bold" whileTap={{
                scale: 1.1,
                rotate: 5
            }}>Volver a jugar
            </motion.button>

        </div>
    );
}
export default EndGame;