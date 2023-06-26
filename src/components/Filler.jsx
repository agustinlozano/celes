import motion from 'framer-motion'
import RegularText from './RegularText.jsx'

// a component to display a JSON lottie animation
function Lottie ({ icon }) {
  return (
    <div className='flex flex-row justify-center items-center'>
      <img src={icon.src} alt={icon.alt} />
    </div>
  )
}

function Filler ({ title, message, icon }) {
  return (
    <div className='flex flex-col justify-center min-h-screen mb-20'>
      <h3 className='text-8xl font-cute'>{title}</h3>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <RegularText>{message}</RegularText>
        <Lottie icon={icon} />
      </motion.div>
    </div>
  )
}

export default Filler
