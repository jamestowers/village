import camelCase from 'lodash/camelCase'
// import upperFirst from 'lodash/upperFirst'
import isArray from 'lodash/isArray'

// import orm from './orm'

function makeArray(json) {
  if (isArray(json)) {
    return json
  }
  return [json]
}

const jsonTypeToModelMap = {
  users: 'User',
  comments: 'Comment',
  posts: 'Post',
  events: 'Event'
}

export const addRelation = (model, relationName, relationType, relationData) => {
  switch (relationType) {
    case 'ManyToMany':
      return model[relationName].add(relationData)
    default:
      return model[relationName] = relationData
  }
}

const getModelFromJsonType = (jsonType) => jsonTypeToModelMap[jsonType]

export const hydrateIncluded = (sess, included) => {
  makeArray(included).map(relation => {
    const type = camelCase(relation.type)
    const relatedModelName = getModelFromJsonType(type)
    if (relatedModelName === null) {
      console.warn(`[hydrate.js] Received json type "${type}" with unmatched model`)
    }
    const model = sess[relatedModelName].upsert(relation.attributes)

    return model
  })
}



export default hydrateIncluded