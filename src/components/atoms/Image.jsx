function Image ({ src, description }) {
  return (
    <img src={src} alt={description} className='w-full rounded-sm' />
  )
}

// export the component to use lazily in the parent component
export default Image
