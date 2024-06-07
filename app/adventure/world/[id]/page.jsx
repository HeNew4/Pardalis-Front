'use client';

import NavBar from '@/app/_components/NavBar';
import Image from 'next/image';
import { Howl } from 'howler';
import _data from '@/app/_data';
import { useEffect, useState } from 'react';
import '@/app/globals.css';


const soundSrc = '/sound/inplace/taquilla/lights.mp3';
const soundSrc2 = '/sound/inplace/taquilla/sb_m.mp3';
const soundSrc3 = '/sound/inplace/taquilla/sb_s.mp3';
const soundSrc4 = '/sound/inplace/taquilla/taq.mp3';

export function taq(props) {
  const [sound3, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [soundSrc4],
      volume: 0.5
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const playsound4 = () => {
    if (sound4) {
      sound4.play();
    }
  };

  return { playsound4 };
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

export default function Page({ params }) {
  const { playsound } = lights();
  const {playsound2} = sb_m();
  const {playsound3} = sb_s();
  const {playsound4} = taq();



  const [data, setData] = useState(_data);

  const handlerAreaClick = (area) => {
    alert(`${area}`);
  };

  return (
    <div className='min-h-screen flex flex-col fondo'>
      <NavBar />

      <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
        <section>
          <Image
            src={data[params.id - 1].src}
            alt={'mapa del mundo ' + params.id}
            width={1200}
            height={663}
            useMap='#Map'
          />
          <map name='Map' id='Map'>
            <area
              shape='poly'
              coords='502,156,678,158,673,185,522,182'
              href='#'
              onClick={() =>{ handlerAreaClick('luz central');
              playsound();
            }}
            />
            <area
              shape='poly'
              coords=''
              href='#'
              onClick={() => handlerAreaClick('luz izquierdiste')}
            />
            <area
              shape='poly'
              coords='899,160,909,160,909,165,1036,165,1036,161,1045,161,1045,165,1067,165,1068,171,1065,179,1061,181,897,181,886,177,884,165,899,165
              '
              href='#'
              onClick={() => {
                handlerAreaClick('luz derechista');
                playsound();
              }}
            />
            <area
              shape='poly'
              coords='70, 220, 70, 224, 56, 224, 56, 231, 61, 234, 140, 234, 140, 243, 141, 252, 144, 261, 
              195, 261, 197, 271, 249, 271, 249, 283, 251, 287, 314, 287, 315, 282, 316, 265, 314, 
              265, 314, 264, 311, 264, 311, 265, 287, 265, 287, 273, 276, 273, 276, 267, 271, 267, 
              271, 273, 239, 273, 239, 263, 229, 263, 229, 259, 223, 259, 223, 263, 184, 263, 184, 
              244, 170, 244, 170, 242, 164, 242, 164, 244, 75, 244, 75, 220'
              href='#'
              onClick={() => {
                handlerAreaClick('luces izquierdistas');
                playsound();
              }}
            />
            <area
              shape='poly'
              coords=''
              href='#'
              onClick={() => {handlerAreaClick('luces derechistas');
              playsound3();
            }}
            />
            <area
              shape='poly'
              coords='25,394,683,389,681,381,678,374,675,369,674,362,673,357,676,354,680,349,680,341,680,336,680,330,680,326,675,329,674,336,670,341,669,346,666,346,665,341,665,333,663,330,662,326,660,333,660,336,659,343,657,348,654,353,651,354,647,354,645,357,648,360,651,362,657,362,662,360,665,363,666,369,666,375,664,380,663,385,661,389,658,394,652,394,675,394'
              href='#'
              onClick={() => {handlerAreaClick('Perro ese');
              playsound3();
            }}
              
            />
            <area
              shape='poly'
              coords=''
              href='#'
              onClick={() => {handlerAreaClick('taquilla');
              playsound4();
            }}
            />
            <area
              shape='poly'
              coords='785,326,845,328,845,419,786,421'
              href='#'
              onClick={() => {handlerAreaClick('mapa del metro')
              playsound2();
            }}
            />
            <area
              shape='poly'
              coords='785,326,845,328,845,419,786,421'
              href='#'
              onClick={() => {handlerAreaClick('escaleras de derecha')
            }}
            />
            <area
              shape='poly'
              coords='785,326,845,328,845,419,786,421'
              href='#'
              onClick={() => {handlerAreaClick('escaleras de izquierda')
            }}
            />
          </map>
        </section>
      </main>
    </div>
  );
}
