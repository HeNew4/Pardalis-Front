'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import NavBar from '../_components/NavBar';
import _Skeleton from './_Skeleton';

const soundSrc = '/sound/click.mp3';
let sound;

export default function Page() {
    const [data, setData] = useState([
        {
            nombre: 'metro',
            descripcion: 'El metro de la CDMX',
            imagen: 'img/ecenarios/Metro-1.svg',
        },
        {
            nombre: 'metro',
            descripcion: 'El metro de la CDMX',
            imagen: 'img/ecenarios/Metro-1.svg',
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [selectedWorldImage, setSelectedWorldImage] = useState(null);
    const [selectWorld, setSelectWorld] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(process.env.APIurl + 'mundo');

                if (!res.ok) {
                    throw new Error('Error al traer los datos');
                }

                const result = await res.json();
                //setData(result);
                setSelectWorld(data[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        setData([
            {
                id: 1,
                nombre: 'metro',
                descripcion: 'El metro de la CDMX',
                imagen: 'img/ecenarios/Metro-1.svg',
            },
            {
                id: 2,
                nombre: 'tiaguis',
                descripcion: 'El tienguis de la CDMX',
                imagen: 'img/ecenarios/tiaguis.jpeg',
            },
        ]);

        fetchData();
    }, []);

    useEffect(() => {
        // Crear una instancia de Howl cuando el componente se monta
        sound = new Howl({
            src: [soundSrc],
            volume: 0.5,
        });
    }, []);

    const playSound = () => {
        // Reproducir el sonido al presionar el botón
        sound.play();
    };

    useEffect(() => {
        if (selectWorld) {
            setSelectedWorldImage(selectWorld.imagen);
        }
    }, [selectWorld]);

    if (loading) return <_Skeleton />;

    return (
        <div className='flex flex-col fondo'>
            <NavBar />
            <div className='min-h-full flex align-middle justify-center m-auto'>
                <main className='grid place-content-center grid-cols-2 p-6 bg-background rounded-3xl hover:bg-background dark:bg-background m-4 '>
                    <div className='grid grid-cols-1'>
                        {data.map((mundo, index) => (
                            <button
                                key={index}
                                className='focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black'
                                onClick={() => {
                                    setSelectWorld(mundo);
                                    playSound();
                                }}
                            >
                                {mundo.nombre}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setSelectWorld({
                                    nombre: 'Juego',
                                    imagen: '/img/ecenarios/reglas.jpeg',
                                    descripcion: '¿Que paso master?',
                                    id: '0/typing',
                                })
                            }
                            className='grid place-content-center focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black'
                        >
                            ¿Te crees bueno?
                        </button>
                    </div>

                    <div>
                        {selectedWorldImage && (
                            <Link href={'/adventure/world/' + selectWorld.id}>
                                <Image
                                    src={`${selectedWorldImage}?${Date.now()}`}
                                    alt={selectWorld?.descripcion}
                                    width={500}
                                    height={500}
                                    className='h-auto max-w-lg rounded-lg'
                                    unoptimized
                                />
                            </Link>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
