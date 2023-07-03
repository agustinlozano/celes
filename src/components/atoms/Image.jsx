function Image ({ src, description }) {
  return (
    <img src={src} alt={description} className='w-full h-full rounded-sm' />
  )
}

export default Image
