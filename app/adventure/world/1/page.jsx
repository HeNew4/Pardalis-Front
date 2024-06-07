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

      <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
        <section>
          <Image
            src={data[0].src}
            alt={'mapa del mundo ' + 0}
            width={1200}
            height={663}
            useMap='#Map'
          />
          <map name='Map' id='Map'>
            <area
              shape='poly'
              coords='502,156,678,158,673,185,522,182'
              href='#'
              onClick={() =>{ handlerAreaClick('Lights = Luces \n laits');
              playsound();
            }}
            />
            <area
              shape='poly'
              coords='145, 165, 152, 165, 152, 171, 250, 171, 250, 165, 258, 165, 258, 171, 286, 171, 286, 179, 280, 188, 141, 188, 133, 179, 133, 156, 145, 61'
              href='#'
              onClick={() => {handlerAreaClick('Lights = Luces \n laits');
              playsound();
            }}
            />
            <area
              shape='poly'
              coords='899,160,909,160,909,165,1036,165,1036,161,1045,161,1045,165,1067,165,1068,171,1065,179,1061,181,897,181,886,177,884,165,899,165
              '
              href='#'
              onClick={() => {
                handlerAreaClick('Lights = Luces \n laits');
                playsound();
              }}
            />
            <area
              shape='poly'
              coords='70, 220, 70, 224, 56, 224, 56, 231, 61, 234, 140, 234, 140, 243, 141, 252, 144, 261, 195, 261, 197, 271, 249, 271, 249, 283, 251, 287, 314, 287, 315, 282, 316, 265, 314, 265, 314, 264, 311, 264, 311, 265, 287, 265, 287, 273, 276, 273, 276, 267, 271, 267, 271, 273, 239, 273, 239, 263, 229, 263, 229, 259, 223, 259, 223, 263, 184, 263, 184, 244, 170, 244, 170, 242, 164, 242, 164, 244, 75, 244, 75, 220'
              href='#'
              onClick={() => {
                handlerAreaClick('Lights = Luces \n laits');
                playsound();
              }}
            />
            <area
              shape='poly'
              coords='1060,222,1070,222,1070,226,1170,226,1170,222,1182,222,1182,225,1199,225,1200,232,1195,241,1103,241,1103,252,1102,258,1098,263,1053,263,1053,269,1050,273,981,273,981,278,980,284,888,284,887,290,886,295,897,295,897,298,898,298,898,300,905,300,905,294,914,294,914,292,920,292,920,294,973,294,973,228,1060,228
              '
              href='#'
              onClick={() => {handlerAreaClick('Lights = Luces \n laits');
              playsound3();
            }}
            />
            <area
              shape='poly'
              coords='25,394,683,389,681,381,678,374,675,369,674,362,673,357,676,354,680,349,680,341,680,336,680,330,680,326,675,329,674,336,670,341,669,346,666,346,665,341,665,333,663,330,662,326,660,333,660,336,659,343,657,348,654,353,651,354,647,354,645,357,648,360,651,362,657,362,662,360,665,363,666,369,666,375,664,380,663,385,661,389,658,394,652,394,675,394'
              href='#'
              onClick={() => {handlerAreaClick('Subway staff = Trabajador del metro \n sab-wey staf');
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
              onClick={() => {handlerAreaClick('Subway map = Mapa del metro \n sab-wey map')
              playsound2();
            }}
            />
            <area
              shape='poly'
              coords='882,380,882,430,1011,430,1011,422,1005,422,1006,415,997,415,997,409,990,408,990,401,982,401,982,393,974,393,974,386,945,385,945,380,939,380,939,373,930,373,930,366,922,366,922,359,914,359,914,351,906,351,906,345,899,345,899,337,891,337,891,330'
              href='#'
              onClick={() => {handlerAreaClick('Stairs - Escaleras \n steerz');
              playsound5();
            }}
            />
            <area
              shape='poly'
              coords='355,310,355,408,198,408,200,403,200,400,207,400,207,396,207,393,217,393,217,389,216,386,225,386,225,379,225,379,232,379,232,375,232,369,241,369,241,367,241,363,281,363,281,359,288,359,288,355,288,353,297,353,296,347,296,345,303,345,303,340,303,338,311,338,311,329,318,328,318,322,326,322,326,317,334,317,334,309,342,309,342,310
              '
              href='#'
              onClick={() => {handlerAreaClick('Stairs - Escaleras \n steerz');
              playsound5();
            }}
            />
            <area
              shape='poly'
              coords='36,322,35,295,210,316,210,331'
              href='#'
              onClick={() => {handlerAreaClick('Signaling - Señalización \n sig-nu-ling');
              playsound6();
            }}
            />
            <area
              shape='poly'
              coords='1028,313,1028,333,1144,327,1144,302'
              href='#'
              onClick={() => {handlerAreaClick('Signaling - Señalización \n sig-nu-ling');
              playsound6();
            }}
            />
          </map>
        </section>
      </main>
    </div>
  );
}