import React from 'react'

export default class Toggle extends React.Component {
  state = {
    isClicked: this.props.isClicked,
  }

  render() {
    return this.props.children({
      isClicked: this.state.isClicked,
      onClick: () =>
        this.setState({
          isClicked: !this.state.isClicked,
        }),
    })
  }
}
