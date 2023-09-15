import React from 'react'

const Loading = () => {
  return (
    <div className='w-full mx-auto flex items-center justify-center'><>
    <span className="text-center loading loading-bars loading-xs"></span>
    <span className="text-center loading loading-bars loading-sm"></span>
    <span className="text-center loading loading-bars loading-md"></span>
    <span className="text-center loading loading-bars loading-lg"></span></>
    <p className='text-center text-blue-700 text-md flex-none'>Please Wait Data is loading..</p>
    </div>
  )
}

export default Loading