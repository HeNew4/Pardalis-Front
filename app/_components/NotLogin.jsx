'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import logo from "../../public/img/Logo/Error.svg";
import Link from "next/link";
import NavBar from "./NavBar";

export default function NotLogin() {
  return (
    <>
      <NavBar />
      <div className="h-svh error text-center grid place-content-center">
        <main className="grid place-content-center ">
          
          <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 720, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15
          }}>
            <Image
              src={logo}
              alt="Logo Error"
              width={1000}
              height={1000}
              />
            </motion.div>
          <br />

          <p className="text-5xl font-bold text-black m-5">¡Vaya! No has Iniciado Sesion.</p>
          <p className="mb-20">Inicia Sesion</p>
          <Link href='/login'>
            <motion.button className="focus:outline-none text-white fondo-especial2 hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10" 
            whileTap={{
                scale: 1.1,
                rotate: 5
                }}>
                  Inicia Sesion 
            </motion.button>
          </Link>
        </main>
      </div>
    </>
  );
}
