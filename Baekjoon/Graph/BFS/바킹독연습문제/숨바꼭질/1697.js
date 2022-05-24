class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(val) {
      let node = new Node(val);
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      return ++this.size;
    }
  
    dequeue() {
      if (!this.first) return null;
      let node = this.first;
      if (this.first == this.last) this.last = null;
      this.first = this.first.next;
      this.size--;
      return node.value;
    }
  
    length() {
      return this.size;
    }
  }
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');
let n=input.shift()
let k=input.shift()
let dist=Array.from({length:100005},v=>-1)

n=+n
k=+k

const bfs=()=>{
    let queue=new Queue()
    queue.enqueue(new Node(n))
    dist[n]=0

    while(queue.length()!=0){
        let cur=queue.dequeue().value
        if(cur==k){
            console.log(dist[cur])
            return
        }

        if(cur-1>=0 && dist[cur-1]==-1){
            queue.enqueue(new Node(cur-1))
            dist[cur-1]=dist[cur]+1
        }
        if(cur+1<=100001 && dist[cur+1]==-1){
            queue.enqueue(new Node(cur+1))
            dist[cur+1]=dist[cur]+1
        }
        if(cur*2<=100001 && dist[cur*2]==-1){
            queue.enqueue(new Node(cur*2))
            dist[cur*2]=dist[cur]+1
        }

    }

}
bfs()