import { motion } from 'framer-motion'
import HighlightText from '../components/HighlightText.jsx'
import { HERO_MESSAGE } from '../content/hero.content.js'

function HeroMessage () {
  return (
    <div id='hero' className='flex flex-col justify-center min-h-screen'>
      <h1 className='text-8xl font-cute'>Cele's letter</h1>
      <header id='my-message-section' className='mx-auto my-5'>
        <h2 className='text-6xl font-cute mb-2'>{HERO_MESSAGE.title}</h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className='text-1xl font-serif'>{HERO_MESSAGE.messages.first}</p>
          <br />
          <p className='text-1xl font-serif'>{HERO_MESSAGE.messages.second}</p>
          <br />
          <p className='text-1xl font-serif'>{HERO_MESSAGE.messages.third}</p>
          <br />
          <p className='text-1xl font-serif'>{HERO_MESSAGE.messages.fourth}</p>
          <HighlightText
            customClass='block mt-5'
          >
            This is the way.
          </HighlightText>
        </motion.div>
      </header>
    </div>
  )
}

export default HeroMessage
