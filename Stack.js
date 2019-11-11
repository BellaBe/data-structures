

class Stack{
  constructor(){
    this.stackLength = 0;
    this.storage = [];
  }
  //Add a vaue on to the end of the stack
  push(value){
    this.storage[this.stackLength] = value;
    this.stackLength++;
  }

  //Remove and return the value at the end of the stack
  pop(){
    if(this.stackLength === 0){
      return undefined;
    }
    this.stackLength--;

    const result = this.storage[this.stackLength];
    delete this.storage[this.stackLength];
    return result;
  }
  //Get the length of the stack
  getStackLength(){
    return this.stackLength;
  }

  //Return last element of the stack
  getLast(){
    return this.storage[this.stackLength - 1];
  }

  //Print elements of the stack
  printStack(){
    return this.storage;
  }
  isEmpty(){
    return this.stackLength == 0;
  }
}


const stack = new Stack;
stack.push(23)
stack.push(25)
stack.push(27)
stack.push(29)
console.log(stack.getStackLength());
console.log(stack.printStack());
console.log(stack.getLast());
console.log(stack.isEmpty());