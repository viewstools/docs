import ChosenPath from './ChosenPath.view.js'
import makeData from './ChosenPath.view.tests.js'
import React from 'react'

const data = makeData()

const getChosenPath = props => {
  const path = props.match.params['0'].toLowerCase()

  const k = Object.keys(data).find(k => k.toLowerCase() === path)
  return data[k]
}

const ChosenPathLogic = props =>
  <ChosenPath {...props} {...getChosenPath(props)} />

export default ChosenPathLogic
