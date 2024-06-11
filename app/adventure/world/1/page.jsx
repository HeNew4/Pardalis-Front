'use client';

import Alert from '@/app/_components/Alert';
import NavBar from '@/app/_components/NavBar';
import Entrada from '@/app/_components/svg/Entrada';
import _data from '@/app/_data';
import '@/app/globals.css';
import { Howl } from 'howler';
import Script from 'next/script';
import { useEffect, useState } from 'react';


const soundSrc = '/sound/inplace/taquilla/lights.mp3';
const soundSrc2 = '/sound/inplace/taquilla/sb_m.mp3';
const soundSrc3 = '/sound/inplace/taquilla/sb_s.mp3';
const soundSrc4 = '/sound/inplace/taquilla/taq.mp3';
const soundSrc5 = '/sound/inplace/taquilla/st.mp3';
const soundSrc6 = '/sound/inplace/taquilla/sin.mp3';

export function sin(props) {
  const [sound6, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc6],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound6 = () => {
    if (sound6) {
      sound6.play();
    }
  };

  return { playsound6 };
}

export function st(props) {
  const [sound5, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc5],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound5 = () => {
    if (sound5) {
      sound5.play();
    }
  };

  return { playsound5 };
}
export function taq(props) {
  const [sound5, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc5],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound5 = () => {
    if (sound4) {
      sound4.play();
    }
  };

  return { playsound5 };
}


export function sb_s(props) {
  const [sound3, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc3],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound3 = () => {
    if (sound3) {
      sound3.play();
    }
  };

  return { playsound3 };
}

export function sb_m(props) {
  const [sound2, setSound] = useState(null);

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
    if (sound2) {
      sound2.play();
    }
  };

  return { playsound2 };
}

export function lights(props) {
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

export default function Page({}) {
  const { playsound } = lights();
  const {playsound2} = sb_m();
  const {playsound3} = sb_s();
  const {playsound4} = taq();
  const {playsound5} = st();
  const {playsound6} = sin();




  const [data, setData] = useState(_data);

  const handlerAreaClick = (area) => {
    alert(`${area}`);
  };

  return (
    <div className='min-h-screen flex flex-col fondo'>
      <NavBar />

      <Alert />

      <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
        <section>
          <Entrada />
        </section>
      </main>

      <Script src='https://henew4.github.io/Example-Script/out/bundle.min.js' />
    </div>
  );
}