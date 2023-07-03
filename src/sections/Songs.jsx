import HighlightText from '../components/HighlightText'
import RegularText from '../components/RegularText'

function Songs () {
  return (
    <div id='moments' className='flex flex-col justify-center min-h-screen mb-20 mx-6'>
      <HighlightText>Can't stop listening these right now</HighlightText>
      <div className='flex flex-col gap-10 my-6'>
        <div>
          <iframe className='rounded-md' src='https://open.spotify.com/embed/track/5ihS6UUlyQAfmp48eSkxuQ?utm_source=generator' width='100%' height='352' frameBorder='0' allowFullScreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy' />
          <RegularText className='mt-4'>Heartfelt and introspective song that captures the bittersweet emotions of self-reflection and the challenges of life</RegularText>
        </div>
        <div>
          <iframe className='rounded-md' src='https://open.spotify.com/embed/track/63CHa6rmamv9OsehkRD8oz?utm_source=generator' width='100%' height='352' frameBorder='0' allowFullScreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy' />
          <RegularText className='mt-3'>"How can I just let you walk away?"</RegularText>
        </div>
      </div>
    </div>
  )
}

export default Songs
