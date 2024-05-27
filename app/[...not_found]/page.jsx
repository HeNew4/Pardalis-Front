'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import logo from "../../public/img/Logo/Error.svg";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-svh error text-center grid place-content-center">
      <main className="grid place-content-center ">
        
        <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 720, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20
        }}>
          <Image
            src={logo}
            alt="Logo Error"
            width={1000}
            height={1000}
            />
          </motion.div>
        <br />

        <p className="text-5xl font-bold text-black m-5">¡Vaya! algo salió mal.</p>
        <p className="mb-20">Por favor, intenta regresar al inicio.</p>
        <Link href='/'>
          <motion.button className="focus:outline-none text-white fondo-especial2 hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10" 
          whileTap={{
               scale: 1.1,
               rotate: 5
              }}>
                Regresar al inicio 
          </motion.button>
        </Link>
      </main>
    </div>
  );
}
