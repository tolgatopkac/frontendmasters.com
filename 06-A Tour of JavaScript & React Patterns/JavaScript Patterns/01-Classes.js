let instance;

// 1) Creating the "Counter" class,
// which contains a "constructor"
// getInstance
// getCount
// increment


class Counter {
  constructor(){
    if(instance){
      throw new Error("You can only create one instance!")
    }
    this.counter = counter;
    instance = this;
  }

  getCount(){
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }

}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;