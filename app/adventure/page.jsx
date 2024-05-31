'use client';

import { useEffect, useState } from 'react';
import NavBar from '../_components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import _Skeleton from './_Skeleton';

export default function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
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
                setData(result);
                setSelectWorld(result[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (selectWorld) {
            setSelectedWorldImage(selectWorld.imagen);
        }
    }, [selectWorld]);

    if (loading) return <_Skeleton />;

    return (
        <div className='min-h-screen flex flex-col fondo'>
            <NavBar />
            
            <main className='grid place-content-center grid-cols-2 p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>
                <div className='grid grid-cols-1'>
                    {data.map((mundo, index) => (
                        <button
                            key={index}
                            className='focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black'
                            onClick={() => setSelectWorld(mundo)}
                        >
                            {mundo.nombre}
                        </button>
                    ))}

                        <button  onClick={() => setSelectWorld({nombre: "Juego", imagen: "/img/extra/importante.jfif", descripcion: "¿Que paso master?", id: "0/typing"})} className='grid place-content-center focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black'>
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
                                className='rounded-xl'
                                unoptimized
                            />
                        </Link>
                    )}
                </div>
            </main>
        </div>
    );
}
