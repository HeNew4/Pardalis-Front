'use client'

import { useState } from 'react'
import NavBar from '../_components/NavBar'
import Image from 'next/image';

export default function Page() {

  const mundos = [
    {
      id: 1,
      nombre: "calle"
    },
    {
      id: 2,
      nombre: "metro"
    },
    {
      id: 3,
      nombre: "mercado"
    },
  ]

  const [idImage, setIdImage] = useState(1);

  return (
    <div className="min-h-screen flex flex-col fondo">
      <NavBar />

      <main className='grid place-content-center grid-cols-2 p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>

        <section className='grid grid-cols-1'>
          {/* API REST */}
          {/* Esto se hara con la API REST */}

          {mundos.map((mundo, index) =>
            <button className="focus:outline-none text-white bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black" onClick={() => setIdImage(mundo.id)}>{mundo.nombre}</button>
          )}

        </section>

        <section>
          <Image src={'/api/archivo/' + idImage} alt={'Mundo Seleccionado ' + idImage} width={500} height={500} />
          <p>{idImage}</p>
        </section>

      </main>

    </div>
  )
}
