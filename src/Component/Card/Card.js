import React from 'react'
import './Card.css'
export default function Card({image , heading,txt ,butoon}) {
  return (
    <div className='card1'>
        <img src={image} alt="" />
        <span>{heading}</span>
        <span>{txt}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}
