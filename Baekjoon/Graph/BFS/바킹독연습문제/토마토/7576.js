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
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let [col,row]=input.shift().split(' ')
col=+col
row=+row

const map=[]
let dist=Array.from(Array(+row),()=>Array(+col).fill(0))
input.map((e)=>map.push(e.split(' ')))
let queue=new Queue()


const bfs=()=>{
    while(queue.length()!=0){
        const [cur_x,cur_y]=queue.dequeue().value

        for(let i=0;i<4;i++){
            let nx=cur_x+dx[i]
            let ny=cur_y+dy[i]

            if(nx<0 || ny<0|| nx>=row|| ny>=col || map[nx][ny]=='-1') continue
            if(dist[nx][ny]==0 || dist[nx][ny]>dist[cur_x][cur_y]+1){
                dist[nx][ny]=dist[cur_x][cur_y]+1
                queue.enqueue(new Node([nx,ny]))
            }

        }

    }

}

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(map[i][j]=='1'){
            queue.enqueue(new Node([i,j]))
            dist[i][j]=1
        }
    }
}


bfs()
let answer=0

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(dist[i][j]==0 && map[i][j]!=-1){
            answer=-1
            break
        }
        else{
            answer=Math.max(answer,dist[i][j]-1)
        }
    }
    if(answer==-1)break
}

console.log(answer)