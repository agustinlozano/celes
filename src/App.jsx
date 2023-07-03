import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Family from './sections/Family'
import HeroMessage from './sections/Hero.jsx'
import Travels from './sections/Travels'
import Loading from './components/atoms/spinner/Loading'
import Moments from './sections/Moments'
import GoUp from './components/atoms/GoUp'
import './App.css'
import Comment from './components/Comment'
import Songs from './sections/Songs'

const THEME = {
  LIGHT: {
    color: '#343a40',
    backgroundColor: '#f8f9fa'
  },
  DARK: {
    color: '#ffffff',
    backgroundColor: '#000000'
  }
}

const APOLOGIZE = 'This website sucks. I didn\'t have enough time to do a decent job :('
const SAD = 'That hug that night totally wrecked me.'
const SHINE = 'Shine on you crazy diamond'
const WISH = 'I wish you were here'

function App () {
  const [ready, setReady] = useState(false)
  const { scrollYProgress } = useScroll()
  // create an effect to set the prefers-color-scheme media query
  // to light or dark mode depending on the user's preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)')
    const prefersNoPreference = window.matchMedia('(prefers-color-scheme: no-preference)')

    if (prefersDarkMode.matches) {
      document.documentElement.style.setProperty('color', THEME.LIGHT.color)
      document.documentElement.style.setProperty('background-color', THEME.LIGHT.backgroundColor)
    } else if (prefersLightMode.matches) {
      document.documentElement.style.setProperty('color', THEME.LIGHT.color)
      document.documentElement.style.setProperty('background-color', THEME.LIGHT.backgroundColor)
    } else if (prefersNoPreference.matches) {
      document.documentElement.style.setProperty('color', THEME.LIGHT.color)
      document.documentElement.style.setProperty('background-color', THEME.LIGHT.backgroundColor)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1500)
  }, [])

  return (
    <>
      {ready
        ? (
          <>
            <motion.div className='progress-bar' style={{ scaleX: scrollYProgress, zIndex: 1000 }} />
            <HeroMessage />
            <Comment icon='❗' message={APOLOGIZE} id='apologize-bad-website' variant='roll' />
            <Moments />
            <Comment icon='🌠' message={WISH} />
            <Travels />
            <Comment icon='💔' message={SAD} />
            <Songs />
            <Comment icon='💎' message={SHINE} />
            <Family />
            <GoUp />
          </>
          )
        : <Loading />}
    </>
  )
}

export default App
