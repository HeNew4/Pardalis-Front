import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

// Assets Import
import logo from '@/public/logo.svg';

function NavBar() {
    return (
        <nav>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link
                    href='/'
                    className='flex items-center space-x-3 rtl:space-x-reverse'
                >
                    <motion.span
                        whileHover={{
                            rotate: 180,
                            scale: 1.1,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 150,
                            damping: 20,
                        }}
                    >
                        <Image
                            src={logo}
                            alt='Logo Pardalis'
                            width={50}
                            height={50}
                        />
                    </motion.span>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap '>
                        Pardalis
                    </span>
                </Link>

                <div className='hidden w-full md:block md:w-auto'>
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0'>
                        <li>
                            <Link
                                href='/'
                                className='block py-2 px-3 rounded hover:text-primary md:hover:bg-transparent md:border-0 md:p-0'
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/adventure'
                                className='block py-2 px-3 rounded hover:text-primary md:hover:bg-transparent md:border-0 md:p-0'
                            >
                                Aventura
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/profile'
                                className='block py-2 px-3 rounded hover:text-primary md:hover:bg-transparent md:border-0 md:p-0'
                            >
                                Perfil
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar