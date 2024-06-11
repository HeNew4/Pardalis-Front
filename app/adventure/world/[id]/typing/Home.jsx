import { motion } from 'framer-motion'

const Home = ({ onGame }) => {

    return (
        <div className="home">
            <div className="title text-black font-bold text-9xl m-10">Tecleado Pardalis</div>


            <motion.button onClick={() => onGame('playing')} className="focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary w-full font-bold" whileTap={{
                scale: 1.1,
                rotate: 5
            }}>¡Iniciar!
            </motion.button>
        </div>
    );
}
export default Home;