const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

class PriorityQueue{
    constructor(n) {
        this.heap = new Array(n+1).fill(0)
        this.size=0
    }
    push(x) {
        // 맨 마지막에 넣음
        this.heap[++this.size] = x
        let idx = this.size
        while (idx != 1) {
            let parent = Math.floor(idx / 2)
            // 부모랑 비교했을떄 크거나같으면 종료 (최소힙)
            if (this.heap[parent] <= this.heap[idx]) {
                break
            }
            // 부모랑 비교했을떄 작으면 swap
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
            idx=parent
        }
    }
    pop() {
        // 이진트리에서의 가장 끝값
        this.heap[1]=this.heap[this.size--]
        let idx = 1
        while (2 * idx <= this.size) {
            let [lc, rc] = [2 * idx, 2*idx + 1]
            let min_child = lc
            // 오른쪽 자식이 왼쪽보다 작으면 
            if (rc <= this.size && this.heap[rc] < this.heap[lc]) {
                min_child=rc
            }
            //커버리면
            if (this.heap[idx] <= this.heap[min_child]) {
                break
            }
            [this.heap[idx], this.heap[min_child]]= [this.heap[min_child], this.heap[idx]]
            idx=min_child
        }
    }
    top() {
        return this.heap[1]   
    }
    length() {
        return this.size
    }
}
const answer=[]
const n = +input.shift()
let pq=new PriorityQueue(n+1)
for (let i = 0; i < input.length; i++){
    const x = +input[i]
    if (x === 0) {
        if (pq.length() === 0) {
            answer.push(0)
        }
        else {
            answer.push(pq.top())
            pq.pop()   
        }
    }
    else {
        pq.push(x)
    }
}
console.log(answer.join('\n'))