import { css } from 'emotion'
import { morph } from '@viewstools/morph'
import { animated, Spring } from '@viewstools/animations/dom.js'
import insertCss from 'insert-css'
import parse from '@viewstools/morph/parse.js'
import React from 'react'

const CSS = `.views-block {
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  align-items: stretch;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  hyphens: auto;
  margin: 0;
  outline: 0;
  overflow-wrap: break-word;
  padding: 0;
  position: relative;
  text-decoration: none;
  word-wrap: break-word;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  text-align: left;
  white-space: normal;
}
.views-block::-moz-focus-inner {
  border: 0;
  margin: 0;
  padding: 0;
}
/* remove number arrows */
.views-block[type='number']::-webkit-outer-spin-button,
.views-block[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}`

function getComponent(code) {
  const out = {}
  const cleanCode = code
    .split('\n')
    .filter(line => !line.startsWith('import '))
    .join('\n')
    .replace('export default ', 'out.View = ')

  new Function('React', 'css', 'Spring', 'animated', 'out', cleanCode)(
    React,
    css,
    Spring,
    animated,
    out
  )
  return out.View
}

export default class View extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    if (!window.viewsCss) {
      window.viewsCss = true
      insertCss(CSS, { prepend: true })
    }

    try {
      const morphed = morph({
        as: 'react-dom',
        compile: true,
        name: 'View',
        track: false,
        views: {
          View: parse({ source: this.props.children }),
        },
      })

      console.log('morphed', morphed)

      this.setState({
        Component: getComponent(morphed.code),
        isLoading: false,
        morphed: morphed.code,
      })
    } catch (error) {
      console.error('error', error)
    }
  }

  render() {
    const { state } = this
    const { children, ...props } = this.props

    if (state.isLoading) return 'loading'

    return <state.Component {...props} />
  }
}
