import { useEffect, useState } from 'react'
import useSectionVisibility from '../hooks/useSectionVisibility'
import RegularText from './RegularText'
import { motion } from 'framer-motion'

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
        className='mx-6 mb-44 p-6 border-2 rounded-md shadow-sm'
        initial={{ scale: 0 }}
        animate={animationPlayed ? { rotate: 360, scale: 1 } : { scale: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25
        }}
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
}

export default Comment
