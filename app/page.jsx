'use client'

import { motion } from 'framer-motion'

import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import Image from "next/image";
import Link from "next/link";

import '@/app/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col fondo">
      <NavBar />

      <main className="grid grid-cols-2 flex-1 p-4">
        <div className="grid place-content-center">
          <motion.div initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20
            }} whileTap={{ rotate: 720, scale: 2.5 }}
          >
            <Image src='logo.svg' alt='Logo Pardalis' width={300} height={300} />
          </motion.div>
        </div>

        <div className="m-10 text-center grid place-content-center">
          <div>

<<<<<<< HEAD
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 text:dark md:text-5xl lg:text-6xl">¡Bienvenido!</h1>

            <br />
            <Link href='/login'>
              <motion.button className="focus:outline-none text:dark bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10" whileTap={{
=======
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">¡Bienvenido!</h1>

            <br />
            <Link href='/login'>
              <motion.button className="focus:outline-none bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10" whileTap={{
>>>>>>> ac15733c846cd49d14817aa1858a27694224bae7
                scale: 1.1,
                rotate: 5
              }}>Inicia Sesión</motion.button>

              <br />
            </Link>
            <p className="mb-5">¿Todavía no tienes una cuenta?</p>

            <div className='cristal rounded-xl w-9/12 p-4 m-auto'>
              <Link href='/register' className="text-4xl font-black text-primary">Regístrate</Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
