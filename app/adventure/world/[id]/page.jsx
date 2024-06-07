'use client';

import NavBar from '@/app/_components/NavBar';
import Image from 'next/image';
import { Howl } from 'howler';
import _data from '@/app/_data';
import { useEffect, useState } from 'react';

const soundSrc = '/sound/inplace/taquilla/lights.mp3';

export function sb_m(props) {
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
  const { playsound } = sb_m();

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
            height={731}
            useMap='#Map'
          />
          <map name='Map' id='Map'>
            <area
              shape='poly'
              coords='502,156,678,158,673,185,522,182'
              href='#'
              onClick={() => handlerAreaClick('luz central')}
            />
            <area
              shape='poly'
              coords='790,485,735,468,736,289,791,287'
              href='#'
              onClick={() => handlerAreaClick('luz izquierdiste')}
            />
            <area
              shape='poly'
              coords='632,299,604,300,605,429,633,435'
              href='#'
              onClick={() => {
                handlerAreaClick('luz derechista');
                playsound();
              }}
            />
            <area
              shape='poly'
              coords='590,485,735,468,736,289,791,22'
              href='#'
              onClick={() => {
                handlerAreaClick('luces izquierdistas');
              }}
            />
            <area
              shape='poly'
              coords='518,408,1199,632,1197,166,1185,253,1186,605,1022,556,1022,266,1184,253,1196,168,939,212,936,279,945,290,945,402,936,413,836,400,832,377,833,292,842,283,936,279,941,211,790,237,792,284,791,486,734,468,735,288,790,286,789,238,702,252,703,296,705,375,700,382,656,374,653,300,670,296,702,295,702,252,635,264,634,296,634,437,604,430,603,299,634,298,637,263,586,271,586,300,588,314,588,360,587,368,560,362,557,305,585,302,586,272,546,279,549,306,550,411,534,410,535,305,549,306,548,278,517,284,368,310,368,360'
              href='#'
              onClick={() => handlerAreaClick('luces derechistas')}
            />
            <area
              shape='poly'
              coords='518,408,1199,632,1197,166,1185,253,1186,605,1022,556,1022,266,1184,253,1196,168,939,212,936,279,945,290,945,402,936,413,836,400,832,377,833,292,842,283,936,279,941,211,790,237,792,284,791,486,734,468,735,288,790,286,789,238,702,252,703,296,705,375,700,382,656,374,653,300,670,296,702,295,702,252,635,264,634,296,634,437,604,430,603,299,634,298,637,263,586,271,586,300,588,314,588,360,587,368,560,362,557,305,585,302,586,272,546,279,549,306,550,411,534,410,535,305,549,306,548,278,517,284,368,310,368,360'
              href='#'
              onClick={() => handlerAreaClick('Perro ese')}
            />
            <area
              shape='poly'
              coords='518,408,1199,632,1197,166,1185,253,1186,605,1022,556,1022,266,1184,253,1196,168,939,212,936,279,945,290,945,402,936,413,836,400,832,377,833,292,842,283,936,279,941,211,790,237,792,284,791,486,734,468,735,288,790,286,789,238,702,252,703,296,705,375,700,382,656,374,653,300,670,296,702,295,702,252,635,264,634,296,634,437,604,430,603,299,634,298,637,263,586,271,586,300,588,314,588,360,587,368,560,362,557,305,585,302,586,272,546,279,549,306,550,411,534,410,535,305,549,306,548,278,517,284,368,310,368,360'
              href='#'
              onClick={() => handlerAreaClick('mapa del metro')}
            />
            <area
              shape='poly'
              coords='518,408,1199,632,1197,166,1185,253,1186,605,1022,556,1022,266,1184,253,1196,168,939,212,936,279,945,290,945,402,936,413,836,400,832,377,833,292,842,283,936,279,941,211,790,237,792,284,791,486,734,468,735,288,790,286,789,238,702,252,703,296,705,375,700,382,656,374,653,300,670,296,702,295,702,252,635,264,634,296,634,437,604,430,603,299,634,298,637,263,586,271,586,300,588,314,588,360,587,368,560,362,557,305,585,302,586,272,546,279,549,306,550,411,534,410,535,305,549,306,548,278,517,284,368,310,368,360'
              href='#'
              onClick={() => handlerAreaClick('taquilla')}
            />
          </map>
        </section>
      </main>
    </div>
  );
}
