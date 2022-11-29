import { saveToStorage, loadFromStorage } from '../tools/storage';
import { generateElementId } from '../tools/generateElementId';
import { isEmpty } from '../tools/isEmpty';

class Queue {
  constructor(fifoName) {
    const initiateStorage = loadFromStorage(fifoName);
    this.fifoName = fifoName;
    if (initiateStorage) {
      this.fifoElements = initiateStorage;
      this.fifoHead = this.fifoElements[0];
      this.fifoTail = this.fifoElements[this.fifoElements.length - 1];
    } else {
      this.fifoElements = [];
    }
    this.fifoQueue = {};
  }

  getItems() {
    if (!isEmpty(this.fifoElements)) {
      console.log(this.fifoElements.length);
      console.log(`Head: ${this.head()}`);
      console.log(`Tail: ${this.tail()}`);
      return this.fifoElements;
    } else {
      return 'Your queue is empty';
    }
  }

  getFifo() {
    return this.fifoName;
  }

  getQueue(element) {
    if (!isEmpty(this.fifoElements)) {
      for (const elem of this.fifoElements) {
        const indexElem = this.fifoElements.indexOf(elem);
        const indexPrev = indexElem - 1;
        const indexNext = indexElem + 1;
        this.fifoQueue[`${this.fifoElements[indexElem]}-Next`] = this
          .fifoElements[indexNext]
          ? this.fifoElements[indexNext]
          : ' ';
        this.fifoQueue[`${this.fifoElements[indexElem]}-Prev`] = this
          .fifoElements[indexPrev]
          ? this.fifoElements[indexPrev]
          : ' ';
        this.fifoQueue[this.fifoElements[indexElem]] = element;
      };
      return this.fifoQueue;
    }

    return console.log('Your queue is empty');
  }

  //fifo.push_head(element) - wstawia element na poczatku
  push_head(element) {
    const newElement = generateElementId(this.fifoName);
    this.fifoHead = newElement;
    this.fifoElements = [this.fifoHead, ...this.fifoElements]; 
    console.log(this.head());
    console.log(this.getQueue(element));
    console.log(this.tail());

    saveToStorage(this.fifoName, this.fifoElements);
    return newElement;
  }

  //fifo.pop_tail() - usuwa element na końcu
  pop_tail() {
    const queueAfterDeleted = this.fifoElements.pop();
    console.log(`Deleted: ${queueAfterDeleted}`);
    saveToStorage(this.fifoName, this.fifoElements);
    return this.fifoElements;
  }

  //fifo.tail() - pobiera ostatni element
  tail() {
    return this.fifoTail;
  }

  //fifo.head() - pobiera pierwszy element
  head() {
    return this.fifoHead;
  }
}

const fifo = new Queue('BOB');
fifo.push_head('Value');
console.log(fifo.getItems());
