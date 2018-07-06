import ButtonAnimatedWidth from './ButtonAnimatedWidth.view.js'
import React from 'react'

export default class ButtonAnimatedWidthLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonAnimatedWidth
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
