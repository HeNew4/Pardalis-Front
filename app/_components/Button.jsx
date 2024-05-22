'use client'

import { motion } from 'framer-motion'


export default function Button(props) {
  return (
    <motion.button className="focus:outline-none text-white bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary w-full" whileTap={{
      scale: 1.1,
      rotate: 5
    }}>{props.title}
    </motion.button>
  )
}
