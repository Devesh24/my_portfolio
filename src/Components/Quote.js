import React from 'react'

function Quote({saying}) {
  return (
    <>
        <div className="quote">
            <div className='quotebox'>{saying.quote}</div>
            <div className='quoteWriter'>{saying.writer}</div>
        </div>
    </>
  )
}

export default Quote