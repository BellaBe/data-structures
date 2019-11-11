class Node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.listLength = 0;
  }

  getListLength(){
    return this.listLength;
  }

  addLast(data){
    const node = new Node(data);
    let tail = null;

    //if empty, make it head
    if(!this.head){
      this.head = node;
    }else{
      tail = this.head;
      while(tail.next){
        tail = tail.next;
      }
      tail.next = node;
    }
    this.listLength++;
  }

  addFirst(data){
  this.head = new Node(data, this.head)
  this.listLength++;
  }

  removeFirst(){
    if(this.listLength> 0) {
      //The head should point to the second element
      this.head.next = this.head;
      this.listLength--;
    }
    if(this.listLength === 0){
      this.tail = null;
    }
  }

  removeLast(){
    if(this.listLength > 0){
      if(this.listLength === 1){
        this.head = null;
        this.tail = null;
      }else{
        //Find the node right before the last node
        let current = this.head;
        while(current.next !== this.tail){
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.listLength--;
    }
  }
  insertAt(data, index){
   
    //If it is empty, set it as a head
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    //If it needs add to the front of the list
    if(index === 0){
      this.addFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    let count = 0;

    //current will be first
    current = this.head;
    while(count < index){
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.listLength++;

  }
  findIndex(value){
    let index = 0;
    let current = this.head;
    while(current !== null){
      if(current.data === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  listToArray(){
    let current = this.head;
    let array = [];
    let index = 0;
    while(current !== null){
      array[index++] = current.data;
      current = current.next;
    }
    return array;
  }

  elementAt(index){
    let currentNode = this.head;
    let count = 0;
    while(count < index){
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
}

const linkedList = new LinkedList();
linkedList.addFirst(1);
linkedList.addFirst(5);
linkedList.addFirst(3);
linkedList.addLast(20);
linkedList.addLast(13);
linkedList.addLast(22);
linkedList.insertAt(30, 4);

console.log(linkedList.elementAt(3));

console.log(linkedList.listToArray());
console.log(linkedList.getListLength());
