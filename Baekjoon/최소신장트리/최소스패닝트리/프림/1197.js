
class Node{
    constructor(x,y,c) {
        this.x = x
        this.y = y
        this.c=c
    }
}
class PriorityQueue{
    constructor() {
        this.heap = []
        this.size=0
    }
    push(x) {
        this.heap[++this.size] = new Node(x[0],x[1],x[2])
        let idx=this.size
        while (idx != 1) {
            let parent =Math.floor(idx/2)
            if (this.heap[parent].c <= this.heap[idx].c) {
                break
            }
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
            idx=parent
        }
    }
    pop() {
        this.heap[1] = this.heap[this.size--]
        let idx =1
        while (2 * idx<=this.size) {
            let [lp, rp] = [2 * idx, 2 * idx + 1]
            let minvalue = lp
            
            if (rp <= this.size && this.heap[rp].c < this.heap[lp].c) {
                minvalue=rp
            }
            if (this.heap[idx].c<=this.heap[minvalue].c) {
                break
            }

            [this.heap[idx], this.heap[minvalue]] = [this.heap[minvalue], this.heap[idx]]
            idx=minvalue
        }
    }
    top() {
      return this.heap[1]  
    }


}
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [v, e] = input.shift().split(' ').map((n)=>+n)
let check = new Array(v + 1).fill(0)
let adj=Array.from(new Array(v+1),()=>new Array())

let pq = new PriorityQueue()
for (let i = 0; i < input.length; i++){
    const [a, b, cost] = input[i].split(' ').map((n) => +n)
    adj[a].push([b, cost])
    adj[b].push([a,cost])
}


// 1. 1번정점에 대해 우선순위큐에 넣음
adj[1].forEach((a) => {
    pq.push([1,a[0],a[1]])
})
check[1]=1
let cnt = 0
let answer=0
while (cnt < v - 1) {
    const [a, b, cost] = [pq.top().x,pq.top().y,pq.top().c]
    pq.pop()
    // 연결이 되있는 정점이면 
    if (check[b]) continue
    check[b]=1
    //연결이 되있지 않는정점
    answer += cost

    // 2. 해당 정점과 연결되있는 간선들을 우선순위큐에넣음
    for (let i = 0; i < adj[b].length; i++){
        const [q, w] = adj[b][i]
        if(check[q])continue
        pq.push([b,q,w])
    }
    cnt+=1
    
}


console.log(answer)