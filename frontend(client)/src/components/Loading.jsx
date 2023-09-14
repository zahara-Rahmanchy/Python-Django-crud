import React from 'react'

const Loading = () => {
  return (
    <div><><span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span></>
    <p className='text-center text-blue-700 text-md'>Please Wait Data is loading..</p>
    </div>
  )
}

export default Loading