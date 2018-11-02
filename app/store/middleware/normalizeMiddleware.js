import isPromise from 'is-promise';

const normalizeMiddleware = store => next => action => {

  const { type, error, payload } = action

  // If not a promise, continue on
  if (isPromise(action.payload)) {
    return next(action);
  }

  console.log('A promise', type)

  
  console.log(payload)
  //const newAction = Object.assign({}, { ...type, ...error, payload: normalize(action.payload.data) )
  
  return next(action)
}

export default normalizeMiddleware
