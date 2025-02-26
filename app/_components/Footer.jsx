import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (


    <footer className="bg-secundary rounded-lg shadow m-2 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Pardalis™</Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline me-4 md:me-6">Términos y condiciones</Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}
