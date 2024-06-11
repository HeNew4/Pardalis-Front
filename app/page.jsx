'use client';

import { motion } from 'framer-motion';

import NavBar from './_components/NavBar';
import Footer from './_components/Footer';
import Image from 'next/image';
import Link from 'next/link';

import '@/app/globals.css';
import Button from './_components/Button';
import  Img from './_components/Img';

export default function Home() {
    
    return (
        <div className='min-h-screen flex flex-col fondo'>
            <NavBar />

            <main className='grid grid-cols-2 flex-1 p-4'>
                <div className='grid place-content-center'>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 150,
                            damping: 20,
                        }}
                        whileTap={{ rotate: 720, scale: 2.5, playsound2 }
                    }
                    >
                        <Image
                            src='logo.svg'
                            alt='Logo Pardalis'
                            width={300}
                            height={300}
                        />
                    </motion.div>
                </div>

                <div className='m-10 text-center grid place-content-center'>
                    <div>
                        <h1 className='mb-4 text-3xl font-extrabold text-gray-900 text:dark md:text-5xl lg:text-6xl'>
                            ¡Bienvenido!
                        </h1>

                        <br />
                        <Link href='/login' className='mb-10'>
                            <Button title='Inicia Sesión'/>

                            <br />
                        </Link>
                        <p className='mb-5 mt-10'>
                            ¿Todavía no tienes una cuenta?
                        </p>

                        <div className='rounded-xl w-9/12 p-4 m-auto'>
                            <Link
                                href='/register'
                                className='text-4xl font-black text-primary hover:underline'
                            >
                                Regístrate
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
