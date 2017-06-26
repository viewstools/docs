import React from 'react'
import ColourPicker from './ColourPicker.view.js'

const hsl = hue => `hsl(${hue}, 100%, 50%)`

const getColours = hue => ({
  before: hsl(hue === 0 ? 340 : hue - 20),
  color: hsl(hue),
  after: hsl(hue === 340 ? 0 : hue + 20),
  hue,
})

class ColourPickerLogic extends React.Component {
  state = getColours(0)

  goBefore = () => {
    const { hue } = this.state
    const hueBefore = hue === 0 ? 340 : hue - 20
    this.setState(getColours(hueBefore))
  }

  goAfter = () => {
    const { hue } = this.state
    const hueAfter = hue === 340 ? 0 : hue + 20
    this.setState(getColours(hueAfter))
  }

  render() {
    return (
      <ColourPicker
        {...this.state}
        goAfter={this.goAfter}
        goBefore={this.goBefore}
      />
    )
  }
}
export default ColourPickerLogic
