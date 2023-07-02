import { useEffect, useState } from 'react'
import useSectionVisibility from '../hooks/useSectionVisibility'
import RegularText from './RegularText'
import { motion } from 'framer-motion'

import './comment.css'

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

function Comment ({ icon, message, id }) {
  const [animationPlayed, setAnimationPlayed] = useState(false)
  const sectionVisible = useSectionVisibility(id)

  useEffect(() => {
    if (sectionVisible && !animationPlayed) {
      setAnimationPlayed(true)
    }
  }, [sectionVisible, animationPlayed])

  return (
    <div id={id}>
      <motion.div
        className='card-container mx-6 mb-44 py-2 border-b-2`'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className='splah' />
        <motion.div className='card px-1' variants={cardVariants}>
          <div className='d-flex'>
            <div className='text-3xl'>
              {icon}
            </div>
            <RegularText>
              {message}
            </RegularText>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Comment

/*
  return (
    <div id={id}>
      <motion.div
        className='mx-6 mb-44 p-6 border-2 rounded-md shadow-sm'
        whileHover={animationPlayed
          ? { scale: 1.2 }
          : {}}
        whileTap={animationPlayed ? { scale: 0.8 } : {}}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-2'>
            {icon}
          </div>
          <div className='col-span-10'>
            <RegularText>
              {message}
            </RegularText>
          </div>
        </div>
      </motion.div>
    </div>
  )
*/
