import React from 'react'
import "./style/Button.css"

const Buttons = ({text, width, height, size}) => {
  return (
	<button className='button'style={{width: width + "px", height: height + "px", fontSize: size + "px" }} >{text}</button>
  )
}

export default Buttons;
