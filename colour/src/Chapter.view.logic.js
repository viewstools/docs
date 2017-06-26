import Chapter from './Chapter.view.js'
import makeData from './ChosenPath.view.tests.js'
import React from 'react'

const data = makeData()

const getChapter = props => {
  const path = props.match.params['0'].toLowerCase()
  const chapter = props.match.params.id.toLowerCase()

  const k = Object.keys(data).find(k => k.toLowerCase() === path)
  const pathData = data[k]

  return pathData.list.find(item => item.id === chapter)
}

const ChapterLogic = props => <Chapter {...props} {...getChapter(props)} />

export default ChapterLogic
