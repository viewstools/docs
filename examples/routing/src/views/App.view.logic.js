import { spring, Value } from 'animated'
import React from 'react'
import App from './App.view.js'

const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth

const height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight

export default class AppLogic extends React.Component {
  // this is our animated value
  // we use react-native Animated for this, see their docs:
  // https://facebook.github.io/react-native/docs/animated.html
  // https://github.com/animatedjs/animated
  a = new Value(0)

  componentWillMount() {
    // and here we make it pop through a spring animation! :)
    spring(this.a, { toValue: 1 }).start()
  }

  // get the values we want to animate
  getAnimated() {
    return {
      transform: [
        {
          scale: this.a,
        },
      ],
    }
  }

  render() {
    // pass the animated values to the view
    return <App {...this.getAnimated()} height={height} width={width} />
  }
}