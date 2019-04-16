import ButtonAnimatedWidth from './ButtonAnimatedWidth.view.js'
import React, { useState } from 'react'

let ButtonAnimatedWidthLogic = props => {
  let [isClicked, setIsClicked] = useState(false)

  return (
    <ButtonAnimatedWidth
      {...props}
      isClicked={isClicked}
      onClick={() => setIsClicked(!isClicked)}
    />
  )
}
export default ButtonAnimatedWidthLogic
