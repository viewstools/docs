import 'react-native-mock/mock'
import { morph } from 'views-morph'
import { shallow } from 'enzyme'
import fs from 'fs'
import globule from 'globule'
import toJson from 'enzyme-to-json'
import path from 'path'
import React from 'react'

const paths = globule.find('**/*.view', {
  filter: f => !/node_modules/.test(f),
})

paths.forEach(fileRaw => {
  const file = path.join(process.cwd(), fileRaw)
  const viewName = path.basename(file, '.view')

  try {
    const View = require(`${file}.js`).default

    const testsFile = `${file}.tests`
    const code = morph(fs.readFileSync(testsFile, 'utf8'), {
      as: 'tests',
      name: `${viewName}.view.tests`,
    }).code.replace(/export const /g, 'out.')

    const out = {}
    // eslint-disable-next
    new Function('out', code)(out)
    const tests = out.make(() => {})

    for (let test in tests) {
      if (test === '_main') continue

      it(`${viewName} (${test})`, () => {
        const wrapper = shallow(<View {...tests[test]} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    }
  } catch (err) {
    it.skip(viewName)
  }
})
