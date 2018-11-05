import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import isArray from 'lodash/isArray'

import orm from './orm'

function wrap(json) {
  if (isArray(json)) {
    return json
  }

  return [json]
}

const hydrate = (sess, json) => {

  wrap(json.data).map(elem => { 
    console.log(elem)
    const type = camelCase(elem.type)
    const modelName = upperFirst(type)

    const entity = sess[modelName]

    console.log(modelName)
  })
}


export default hydrate