import React from 'react'
import './photos.css'


function Photo(props) {
  return (
    <div className='polaroid'>
        <div className='polaroidFrame'>
            <img src={props.src} alt={props.alt} className="polaroidPhoto"/>
        </div>
    </div>
  )
}

export default Photo