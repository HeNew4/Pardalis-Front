'use client';

import Image from 'next/image';
import NavBar from '@/app/_components/NavBar';
import metroImg from '../../../../public/img/ecenarios/Metro-1.svg';
import tiaguisImg from '../../../../public/img/ecenarios/tiaguis.jpeg';

import { useState } from 'react';

export default function Page({ params }) {
    const [data, setData] = useState([
        {
            id: 1,
            nombre: 'metro',
            descripcion: 'El metro de la CDMX',
            imagen: metroImg,
        },
        {
            id: 2,
            nombre: 'tiaguis',
            descripcion: 'El tienguis de la CDMX',
            imagen: tiaguisImg,
        },
    ]);

    return (
        <div className='min-h-screen flex flex-col fondo'>
            <NavBar />

            <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
                <section>
                    <Image
                        src={data[params.id].imagen}
                        alt={'mapa del mundo ' + params.id}
                        width={500}
                        height={500}
                        unoptimized
                    />
                </section>
            </main>
        </div>
    );
}
