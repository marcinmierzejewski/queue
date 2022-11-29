import {v4 as uuidv4} from 'uuid';
// import { save, load } from '../tools/storage'
// const uuidv4 = require('uuid/v4')

class Queue {
  constructor({ fifoName }) {
    this.fifoName = fifoName
  }

  //fifo.push_head(element) - wstawia element na poczatku
  addElement(){
    const fifoId = uuidv4();;
  
    console.log('test')
    return fifoId
  }

  //fifo.pop_tail() - wstawia elemnt na końcu

  //fifo.tail() - pobiera ostatni element

  //fifo.head() - pobiera pierwszy element
}

const fifo = new Queue({
  name: "SomeFifoName"
});

console.log(fifo.addElement())
