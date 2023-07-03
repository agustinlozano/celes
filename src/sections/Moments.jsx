import { useEffect, useState } from 'react'
import HighlightText from '../components/HighlightText.jsx'
import RegularText from '../components/RegularText.jsx'
import Image from '../components/atoms/Image.jsx'
import useSectionVisibility from '../hooks/useSectionVisibility.jsx'
import Loading from '../components/atoms/spinner/Loading.jsx'
import LoadMore from '../components/atoms/LoadMore.jsx'

import { MOMENTS, MAIN } from '../content/moments.content.js'

function Moments () {
  const [photos, setPhotos] = useState([])
  const isSectionVisible = useSectionVisibility('moments')

  useEffect(() => {
    // add three photos to the state
    setPhotos(MOMENTS.slice(0, 3))
  }, [])

  function handleLoadMore () {
    // add three more photos to the state
    setPhotos(MOMENTS.slice(0, photos.length + 3))
  }

  return (
    <div id='moments' className='flex flex-col justify-center min-h-screen mb-20 mx-6'>
      <HighlightText>{MAIN.title}</HighlightText>
      <RegularText>{MAIN.message}</RegularText>
      <div id='my-moments-section' className='mx-auto px-1 my-5'>
        {isSectionVisible
          ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {photos && photos.map((place) => {
                return (
                  <div key={place.id} className='flex flex-col justify-start items-center border border-l-4 border-b-2 border-r border-l-blue-950 rounded-tl-md'>
                    <Image src={place.src} description={place.alt} ratio={place.aspectRatio} />
                    <div className='my-2 px-1'>
                      <RegularText>{place.description}</RegularText>
                    </div>
                  </div>
                )
              })}
              <LoadMore
                onClick={handleLoadMore}
                hide={photos.length === MOMENTS.length}
              />
            </div>)
          : <Loading />}
      </div>
    </div>
  )
}

export default Moments
