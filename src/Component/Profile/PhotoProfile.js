import React from 'react'

export default function PhotoProfile(props) {
    const { pic, size, className } = props
  return (
    <img src={pic} alt="" height={size} className={className}/>
  )
}
