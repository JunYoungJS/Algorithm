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
// let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  
  let [row,col]=input.shift().split(' ')
  row=+row
  col=+col
  
  const map=[]
  let dist=Array.from(Array(+row),()=>Array(+col).fill(99999))
  let fire_dist=Array.from(Array(+row),()=>Array(+col).fill(99999))

  input.map((e)=>map.push(e.split('')))
  let queue=new Queue()
  

  const bfs=()=>{

    while(queue.length()!=0){
      let [cur_x,cur_y]=queue.dequeue().value
    for(let i=0;i<4;i++){
        
        let nx=cur_x+dx[i]
        let ny=cur_y+dy[i]

        if(nx<0 || ny<0 || nx>=row|| ny>=col)continue
        if (map[nx][ny]=='.' && dist[nx][ny]==99999){
            dist[nx][ny]=dist[cur_x][cur_y]+1
            queue.enqueue(new Node([nx,ny]))
        }
    }
  }
  }


  const fire_bfs=()=>{

    while(queue.length()!=0){
      let [cur_x,cur_y]=queue.dequeue().value
    for(let i=0;i<4;i++){
        
        let nx=cur_x+dx[i]
        let ny=cur_y+dy[i]

        if(nx<0 || ny<0 || nx>=row || ny>=col)continue
        if (map[nx][ny]=='.' && fire_dist[nx][ny]==99999){
            fire_dist[nx][ny]=fire_dist[cur_x][cur_y]+1
            queue.enqueue(new Node([nx,ny]))
        }
    }
  }
  }

  for(let i=0;i<row;i++){
      let flag=false
      for(let j=0;j<col;j++){
          if(map[i][j]=='J'){ //지훈이
            dist[i][j]=0
            queue.enqueue(new Node([i,j])) 
            flag=true
            break
        }
        if(flag)break
      }
  }

  bfs()
  queue=new Queue()
 
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(map[i][j]=='F'){ //불
          fire_dist[i][j]=0
          queue.enqueue(new Node([i,j])) 
      }
    }
}
  
fire_bfs()

let answer=99999

for(let i=0;i<row;i++){
  if(dist[i][0]+1<fire_dist[i][0]+1 && map[i][0]=='.' || map[i][0]=='J'){
     answer=Math.min(answer,dist[i][0]+1)
  }
  if(dist[i][col-1]+1<fire_dist[i][col-1]+1 && map[i][col-1]=='.' || map[i][col-1]=='J'){
    answer=Math.min(answer,dist[i][col-1]+1)
  }
}

for(let i=0;i<col;i++){
  if(dist[0][i]+1<fire_dist[0][i]+1 && map[0][i]=='.' || map[0][i]=='J'){
     answer=Math.min(answer,dist[0][i]+1)
  }

  if(dist[row-1][i]+1<fire_dist[row-1][i]+1 && map[row-1][i]=='.' || map[row-1][i]=='J'){
    answer=Math.min(answer,dist[row-1][i]+1)
  }
}

if(answer==99999){
  console.log('IMPOSSIBLE')
}
else{
console.log(answer)
}