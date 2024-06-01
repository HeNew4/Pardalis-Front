'use client'

import { Howl } from 'howler';
import { motion } from 'framer-motion'
import { useEffect } from 'react';

const soundSrc = '/sound/click.mp3';

export default function Button(props) {

  let sound;

  useEffect(() => {
    // Crear una instancia de Howl cuando el componente se monta
    sound = new Howl({
      src: [soundSrc],
      volume: 0.5
    });
  }, []);

  const playSound = () => {
    // Reproducir el sonido al presionar el botón
    sound.play();
  };

  return (
    <motion.button onClick={playSound} className="focus:outline-none bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary w-full" whileTap={{
      scale: 1.1,
      rotate: 5
    }}>{props.title}
    </motion.button>
  )
}
