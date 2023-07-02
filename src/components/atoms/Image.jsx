function Image ({ src, description }) {
  return (
    <img src={src} alt={description} className='w-full rounded-sm' />
  )
}

export default Image
