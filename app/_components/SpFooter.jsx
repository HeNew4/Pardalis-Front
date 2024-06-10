'use client';

import Link from 'next/link'
import React from 'react'
import { Howl } from 'howler';
import { useEffect, useState } from 'react';


const soundSrc = '/sound/inplace/botones/terms.mp3';
const soundSrc2 = '/sound/inplace/botones/about.mp3';


export function about(props) {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc2],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound2 = () => {
    if (sound) {
      sound.play();
    }
  };
   return { playsound2 };
  }
export function terms(props) {
    const [sound, setSound] = useState(null);
  
    useEffect(() => {
      const newSound = new Howl({
        src: [soundSrc],
        volume: 0.5
      });
      setSound(newSound);
  
      return () => {
        newSound.unload();
      };
    }, []);
  
    const playsound = () => {
      if (sound) {
        sound.play();
      }
    };
     return { playsound };
    }

export default function Footer() {
  const {playsound} = terms();
  const {playsound2} = about();
  return (


    <footer className="bg-secundary rounded-lg shadow m-2 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Pardalis™</Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6" onClick={playsound2}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline me-4 md:me-6" onClick={playsound}>Términos y condiciones</Link>
          </li>
        </ul>
      </div>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <Link href="https://www.instagram.com/popeyedbisaac/" className='hover:underline'>contacto@pardalis.com</Link>
        <Link href="https://www.instagram.com/hntmclv/" className='hover:underline'><img />@Pardalis</Link>
        <Link href="https://www.instagram.com/alonso_vazsil/" className='hover:underline'><img />@Pardalis</Link>
      </div>
    </footer>

  )
}