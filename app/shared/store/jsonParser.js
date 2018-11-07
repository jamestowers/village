import camelCase from 'lodash/camelCase'
import isArray from 'lodash/isArray'

function wrap(json) {
  if (isArray(json)) {
    return json
  }

  return [json]
}

function isDate(attributeValue) {
  return Object.prototype.toString.call(attributeValue) === '[object Date]';
}

function camelizeNestedKeys(attributeValue) {
  if (attributeValue === null || typeof attributeValue !== 'object' || isDate(attributeValue)) {
    return attributeValue;
  }

  if (isArray(attributeValue)) {
    return attributeValue.map(camelizeNestedKeys);
  }

  const copy = {};

  Object.keys(attributeValue).forEach((k) => {
    copy[camelCase(k)] = camelizeNestedKeys(attributeValue[k]);
  });

  return copy;
}

function extractRelationships(relationships, { camelizeKeys, camelizeTypeValues }) {
  const ret = {};
  Object.keys(relationships).forEach((key) => {
    const relationship = relationships[key];
    const name = camelizeKeys ? camelCase(key) : key;
    ret[name] = {};

    if (typeof relationship.data !== 'undefined') {
      if (isArray(relationship.data)) {
        ret[name].data = relationship.data.map(e => ({
          id: e.id,
          type: camelizeTypeValues ? camelCase(e.type) : e.type,
        }));
      } else if (relationship.data != null) {
        ret[name].data = {
          id: relationship.data.id,
          type: camelizeTypeValues ? camelCase(relationship.data.type) : relationship.data.type,
        };
      } else {
        ret[name].data = relationship.data;
      }

      if (typeof relationship.meta !== 'undefined') {
        ret[name].meta = camelizeNestedKeys(relationship.meta);
      }
    }

    if (relationship.links) {
      ret[name].links = camelizeKeys ? camelizeNestedKeys(relationship.links) : relationship.links;
    }
  });
  return ret;
}

const extractEntities = (json, options) => {
  const result = {}
  const { camelizeKeys, camelizeTypeValues } = options

  wrap(json).map(entity => {
    const type = camelizeKeys ? camelCase(entity.type) : entity.type

    const post = {
      ...entity.attributes
    }
    console.log(post)
    /* result[type] = result[type] || {}
    result[type][entity.id] = result[type][entity.id] || {
      id: entity.id,
    } */
    result[type][entity.id].type = camelizeTypeValues ? camelCase(entity.type) : entity.type

    if (camelizeKeys) {
      result[type][entity.id].attributes = {}

      Object.keys(entity.attributes).map(key => {
        result[type][entity.id].attributes[camelCase(key)] = camelizeNestedKeys(entity.attributes[key])
      })
    } else {
      result[type][entity.id].attributes = entity.attributes
    }

    if (entity.links) {
      result[type][entity.id].links = {}

      Object.keys(entity.links).map(key => {
        const newKey = camelizeKeys ? camelCase(key) : key
        result[type][entity.id].links[newKey] = entity.links[key]
      })
    }

    if (entity.relationships) {
      result[type][entity.id].relationships =
        extractRelationships(entity.relationships, { camelizeKeys, camelizeTypeValues })
    }

    if (entity.meta) {
      result[type][entity.id].meta = processMeta(entity.meta, { camelizeKeys })
    }
  })
  // console.log(result)
  return result
}

const defaultOtions = {
  camelizeKeys: true,
  camelizeTypeValues: true
}

const parse = (json, opts = defaultOtions) => {
  const ret = {};
  if (json.data) {
    Object.assign(ret, extractEntities(json.data, opts));
  }

  if (json.included) {
    Object.assign(ret, extractEntities(json.included, opts));
  }
}

export default parse
