
class PriorityQueue{
    constructor() {
        this.heap = []
        this.size=0
    }
    push(x) {
        this.heap[++this.size]=x
        let idx = this.size
        while (idx !==1) {
            const parent = Math.floor(idx / 2)
            if (this.heap[parent] >= this.heap[idx]) {
                break
            }
            [this.heap[parent],this.heap[idx]]=[this.heap[idx],this.heap[parent]]
            idx=parent
        }
    }
    pop() {
        this.heap[1] = this.heap[this.size--]
        let idx=1
        while (2 * idx <= this.size) {
            let [lc, rc] = [2 * idx, 2 * idx + 1]
            let minvalue=lc
            if (rc <= this.size && this.heap[minvalue] < this.heap[rc]) {
                minvalue=rc
            }
            if (this.heap[minvalue] <=this.heap[idx]) {
                break
            }
            [this.heap[minvalue],this.heap[idx]]=[this.heap[idx],this.heap[minvalue]]
            idx=minvalue
        }
    }
    top() {
        return this.heap[1]
    }

}
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
let answer=""
const n = +input.shift()
const pq=new PriorityQueue()
for (let i = 0; i < input.length; i++){
    const x = +input[i]
    if (x === 0) {
        if (pq.size === 0) {
            answer+=`0\n`
        }
        else {
            answer+=`${pq.top()}\n`
            pq.pop()
        }
    }
    
    else {
        pq.push(x)
    }

}
console.log(answer)