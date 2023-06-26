import { useEffect, useState } from 'react'
import HighlightText from '../components/HighlightText.jsx'
import RegularText from '../components/RegularText.jsx'
import Image from '../components/atoms/Image.jsx'
import useSectionVisibility from '../hooks/useSectionVisibility.jsx'
import Loading from '../components/atoms/spinner/Loading.jsx'

import { PLACES, MAIN } from '../content/travels.content.js'

function LoadMore ({ onClick, hide }) {
  if (hide) {
    return null
  }

  return (
    <div className='flex flex-row justify-center items-center my-5 mx-auto'>
      <button className='bg-slate-800 hover:bg-slate-600 text-stone-100 font-bold py-2 px-4 rounded' onClick={onClick}>
        Load more
      </button>
    </div>
  )
}

function Travels () {
  const [photos, setPhotos] = useState([])
  const isSectionVisible = useSectionVisibility('travels')

  useEffect(() => {
    // add three photos to the state
    setPhotos(PLACES.slice(0, 3))
  }, [])

  function handleLoadMore () {
    // add three more photos to the state
    setPhotos(PLACES.slice(0, photos.length + 3))
  }

  return (
    <div id='travels' className='flex flex-col justify-center min-h-screen mb-20 mx-2'>
      <HighlightText>{MAIN.title}</HighlightText>
      <RegularText>{MAIN.message}</RegularText>
      <div id='my-travels-section' className='mx-auto px-1 my-5'>
        {isSectionVisible
          ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {photos && photos.map((place) => {
                return (
                  <div key={place.id} className='flex flex-col justify-start items-center border rounded-sm'>

                    <Image src={place.src} description={place.description} />

                    <div className='flex flex-col justify-center items-center px-2'>
                      <h2 className='text-4xl font-cute mt-2'>{place.place}</h2>
                      <RegularText>{place.description}</RegularText>
                      <div className='flex flex-row gap-1 justify-center items-center my-5'>
                        {place.featuredIn?.map((featured) => (
                          <p key={featured} className='text-xs font-lato py-1 px-4 border hover:border-stone-400 hover:bg-stone-200 hover:text-stone-800'>{featured}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
              <LoadMore
                onClick={handleLoadMore}
                hide={photos.length === PLACES.length}
              />
            </div>)
          : <Loading />}
      </div>
    </div>
  )
}

export default Travels
