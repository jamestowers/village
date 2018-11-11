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

const getModelFromJsonType = (jsonType) => {
  if (jsonType in jsonTypeToModelMap) {
    return jsonTypeToModelMap[jsonType]
  } else {
    throw new Error(`[getModelFromJsonType()] Received json type "${jsonType}" with unmatched model`)
  }
}

export const addRelation = (modelInstance, relationName, relationType, relationData) => {
  // console.log(relationType, relationName, relationData.id)
  switch (relationType) {
    case 'ManyToMany':
      return modelInstance[relationName].add(relationData.id)
    default:
      return modelInstance[relationName] = relationData.id
  }
}

export const hydrateRelations = (modelInstance, relations) => {
  const modelClass = modelInstance.constructor
  Object.keys(relations).map(relationName => {
    if (!(relationName in modelClass.fields)) {
      return console.warn(`[Post.js] ${relationName} not found in ${modelClass.modelName} fields list`);
    }

    const relation = relations[relationName]
    const relationType = modelClass.fields[relationName].constructor.name

    if (typeof relation.data !== 'undefined') {
      if (isArray(relation.data)) {
        relation.data.map(data => {
          return addRelation(modelInstance, relationName, relationType, data)
        })
      } else {
        return addRelation(modelInstance, relationName, relationType, relation.data)
      }
    }
    return relation
  })
}

/* export const hydrateIncluded = (session, included) => {
  makeArray(included).map(relation => {
    const type = camelCase(relation.type)
    const relatedModelName = getModelFromJsonType(type)

    const model = session[relatedModelName].upsert(relation)

    return model
  })
} */

const createEntities = (session, json) => {
  makeArray(json).map(entity => {
    const type = camelCase(entity.type)
    const relatedModelName = getModelFromJsonType(type)
    const obj = {
      id: entity.id,
      type,
      ...entity.attributes
    }
    const modelInstance = session[relatedModelName].upsert(obj)

    if (entity.relationships) {
      hydrateRelations(modelInstance, entity.relationships)
    }

    return modelInstance
  })
}

const handleJsonAPIResponse = (session, json) => {
  if (json.included) {
    createEntities(session, json.included)
  }
  createEntities(session, json.data)
}

export default handleJsonAPIResponse