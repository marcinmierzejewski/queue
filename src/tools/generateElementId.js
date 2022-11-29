import {v4 as uuidv4} from 'uuid';

export const generateElementId = (name) => {
  const generate = `${name}Element-${uuidv4()}`
  return generate
}