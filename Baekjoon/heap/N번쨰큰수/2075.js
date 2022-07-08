const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

//최대 힙 만들기 
class PriorityQueue{
    constructor() {
        this.heap = [null]
        this.size=0
    }


    pop() {
      // 가장 작은거를 루트에 저장하고 아래로 내려가면서 갱신 
    this.heap[1]=this.heap[this.size--]
    let idx = 1
    while (2 * idx <= this.size) {
        let [lp, rp] = [2 * idx, 2 * idx + 1]
        let minvalue = lp

        if (rp <= this.size && this.heap[rp] < this.heap[minvalue]) {
            minvalue=rp
        }
        if (this.heap[minvalue] >=this.heap[idx]) {
            break
        }

        [this.heap[minvalue], this.heap[idx]] = [this.heap[idx], this.heap[minvalue]]
        idx=minvalue
    }
    }

    push(x) {
     // 루트 = 가장큰값
     // 아래에서 위로 올라감
     // 1.마지막위치에 삽입
    this.heap[++this.size]=x
    let idx=this.size    
    while (idx != 1) {
        let parent = Math.floor(idx/2)

        if (this.heap[parent] <= this.heap[idx]) {
            break
        }
        [this.heap[parent],this.heap[idx]]=[this.heap[idx],this.heap[parent]]
        idx=parent
     }    
    }
    top() {
        return this.heap[1]
    }

}

let t = +input.shift()
while (t != 0) {
    let answer = 0
    const pq = new PriorityQueue()
    const k = +input.shift()
    const cd = input.shift().split(' ').map((n) => +n)
    for (let i = 0; i < cd.length; i++){
        pq.push(cd[i])
    }
    while (pq.size >=2) {
        let a = pq.top()
        pq.pop()
        let b = pq.top()
        pq.pop()
        answer += a + b
        pq.push(a+b)
    }
    console.log(answer)

    
    t-=1
    
}