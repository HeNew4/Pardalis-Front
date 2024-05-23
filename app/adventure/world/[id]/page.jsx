'use client'

import Image from 'next/image';
import NavBar from '@/app/_components/NavBar';

export default function Page({ params }) {

  return (
    <div className="min-h-screen flex flex-col fondo">
      <NavBar />

      <main className='grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 '>

        <section>
          <Image src={'/api/archivo/'} alt={'mapa del mundo ' + params.id} width={500} height={500} />
        </section>

      </main>

    </div>
  )
}
