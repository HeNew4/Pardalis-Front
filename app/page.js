'use client'

import { motion } from 'framer-motion'

import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col fondo">
      <NavBar />

      <main className="grid grid-cols-2 flex-1 p-4">

        <motion.div className="grid place-content-center" initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }} whileHover={{rotate:180}}>
          <Image src='logo.svg' alt='Logo Pardalis' width={300} height={300} />
        </motion.div>

        <motion.div className="m-10 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">¡Bienvenido!</h1>


          <br />

          <motion.button className="focus:outline-none text-white bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10" whileTap={{
            scale: 1.1,
            rotate: 5
          }}>Inicia Sesión</motion.button>

          <br />

          <p className="mb-5 hover:underline">¿Todavía no tienes cuenta?</p>

          <Link href='/register' className="text-4xl font-black text-primary">Regístrate</Link>

        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
