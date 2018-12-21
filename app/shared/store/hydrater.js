import camelCase from 'lodash/camelCase'
import isArray from 'lodash/isArray'

function makeArray(json) {
  if (isArray(json)) {
    return json
  }
  return [json]
}

const jsonAPITypeToModel = {
  users: 'User',
  comments: 'Comment',
  posts: 'Post',
  events: 'Event'
}

const getModelFromJsonType = (jsonType) => {
  if (jsonType in jsonAPITypeToModel) {
    return jsonAPITypeToModel[jsonType]
  } else {
    throw new Error(`[Hydrater.js][getModelFromJsonType()] Received json type "${jsonType}" with unmatched model`)
  }
}

export const addRelation = (modelInstance, relatedModelName, relationName, relationType, relationData) => {
  // console.log(modelInstance.type, modelInstance, relationType, relationName, relationData.id)
  switch (relationType) {
    case 'ManyToMany':
      // console.log(relatedModelName.toLowerCase())
      return modelInstance[relationName].add(relationData.id)
    default:
      return modelInstance[relationName] = relationData.id
  }
}

export const hydrateRelations = (modelInstance, relations) => {
  const modelClass = modelInstance.constructor

  Object.keys(relations).map(relationName => {
    if (!(relationName in modelClass.fields)) {
      return console.warn(`[Hydrater.js][hydrateRelations()] ${relationName} not found in ${modelClass.modelName} fields list`);
    }

    const relation = relations[relationName]
    const relationType = modelClass.fields[relationName].constructor.name

    if (typeof relation.data !== 'undefined') {
      const relatedModelName = getModelFromJsonType(relation.data.type)
      // console.log(relatedModelName, relationName)
      if (isArray(relation.data)) {
        relation.data.map(data => {
          return addRelation(modelInstance, relatedModelName, relationName, relationType, data)
        })
      } else {
        return addRelation(modelInstance, relatedModelName, relationName, relationType, relation.data)
      }
    }
    return relation
  })
}

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
    // console.log('[hydrater.js] Saving included resources')
    createEntities(session, json.included)
  }
  createEntities(session, json.data)
}

export default handleJsonAPIResponse