import { motion } from 'framer-motion'
import HighlightText from '../components/HighlightText.jsx'
import RegularText from '../components/RegularText.jsx'
import { HERO_MESSAGE } from '../content/hero.content.js'

function ThreeDots () {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 180 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='flex flex-row justify-center items-center mt-10'
    >
      <div className='w-2 h-2 bg-slate-800 rounded-full ' />
      <div className='w-2 h-2 bg-slate-800 rounded-full ml-2' />
      <div className='w-2 h-2 bg-slate-800 rounded-full ml-2' />
    </motion.div>
  )
}

function HeroMessage () {
  return (
    <div id='hero' className='flex flex-col justify-center min-h-screen mb-20'>
      <h1 className='text-8xl font-cute'>Cele's letter</h1>
      <header id='my-message-section' className='mx-auto px-1 my-5'>
        <h2 className='text-6xl font-cute mb-2'>{HERO_MESSAGE.title}</h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <RegularText>{HERO_MESSAGE.messages.first}</RegularText>
          <br />
          <RegularText>{HERO_MESSAGE.messages.second}</RegularText>
          <br />
          <RegularText>{HERO_MESSAGE.messages.third}</RegularText>
          <br />
          <RegularText>{HERO_MESSAGE.messages.fourth}</RegularText>
          <div className='mt-14'>
            <img src='/assets/img/flag.png' alt='United States flag' className='w-1/2 mx-auto' />
            <HighlightText
              customClass='block mt-5'
            >
              This is the way.
            </HighlightText>
          </div>
        </motion.div>
      </header>
      <ThreeDots />
    </div>
  )
}

export default HeroMessage
