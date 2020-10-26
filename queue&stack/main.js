class Queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
  }

  pop(value) {
    this.data.pop();
  }

  print() {
    console.log(this.data);
  }

  front() {
    console.log(this.data[this.data.length-1]);
  }
}

const q = new Queue();
q.add(4);
q.add(3);
q.add(2);
q.print();
q.pop();
q.print();
q.front();

class Stack {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
  }

  pop() {
    this.data.shift();
  }

  top() {
    console.log(this.data[0]);
  }

  print() {
    console.log(this.data);
  }
}

const s = new Stack();
s.add(1);
s.add(2);
s.add(3);
s.print();
s.pop();
s.print();
s.top();
