import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const images = [
  '/images/plataforma/inicio.png',
  '/images/plataforma/curso_home.png',
  '/images/plataforma/curso_aula.png',
  '/images/plataforma/lista_na_aula.png',
  '/images/plataforma/duvidas_de_uma_questao.png',
  '/images/plataforma/minha_biblioteca.png',
  '/images/plataforma/banco_questoes_adicionadas.png',
  '/images/plataforma/simuladores.png'
]

export default function ImageSlideshow({ interval = 4000 }) {
  const [index, setIndex] = React.useState(0)
  
  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    )
    return () => clearInterval(id)
  }, [interval])

  return (
    <AnimatePresence>
      <motion.img
        key={index}
        src={images[index]}
        alt={`slide ${index}`}
        className='absolute inset-0 size-full bg-cover bg-top'
        initial={{ opacity: 0, y: 10 }}
        fetchPriority='high'
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
      />
      
    </AnimatePresence>
  )
}
