'use client';

import Image from 'next/image';
import NavBar from '@/app/_components/NavBar';
import metroImg from '../../../../public/img/ecenarios/Metro-1.svg';
import tiaguisImg from '../../../../public/img/ecenarios/tiaguis.jpeg';

import { useState } from 'react';
import _data from '@/app/_data';

export default function Page({ params }) {
    const [data, setData] = useState(_data);

    return (
        <div className='min-h-screen flex flex-col fondo'>
            <NavBar />

            <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
                <section>
                    <Image
                        src={data[params.id - 1].src}
                        alt={'mapa del mundo ' + params.id}
                        width={500}
                        height={500}
                        unoptimized

                        className='h-screen w-screen rounded-sm'
                    />
                </section>
            </main>
        </div>
    );
}
