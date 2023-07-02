function LoadMore ({ onClick, hide }) {
  if (hide) {
    return null
  }

  return (
    <div className='flex flex-row justify-center items-center my-5 mx-auto'>
      <button className='bg-blue-900 hover:bg-blue-950 text-stone-100 font-bold py-2 px-4 rounded' onClick={onClick}>
        Load more
      </button>
    </div>
  )
}

export default LoadMore
