import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (


    <footer className="bg-secundary rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Pardalis™</Link>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">Términos y condiciones</Link>
          </li>
        </ul>
      </div>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <Link href="https://www.instagram.com/popeyedbisaac/" className='hover:underline'>@popeyedbisaac</Link>
            <Link href="https://www.instagram.com/hntmclv/" className='hover:underline'>@hntmclv</Link>
            <Link href="https://www.instagram.com/alonso_vazsil/" className='hover:underline'>@alonso_vazsil</Link>
            <Link href="https://www.instagram.com/oscxr_vlxxm/" className='hover:underline'>@oscxr_vlxxm</Link>
            <Link href="https://www.instagram.com/antonio16rms/" className='hover:underline'>@antonio16rms</Link>
      </div>
    </footer>

  )
}