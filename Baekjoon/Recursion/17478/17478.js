const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');


console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')
const s=['"재귀함수가 뭔가요?"','"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
'마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
'그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."']
const speak=(n,space)=>{
    if(n==0){
        for(let j=0;j<space;j++){
            process.stdout.write("_")
        }
        console.log('"재귀함수가 뭔가요?"')
        for(let j=0;j<space;j++){
            process.stdout.write("_")
        }
        console.log('"재귀함수는 자기 자신을 호출하는 함수라네"')
        for(let j=0;j<space;j++){
            process.stdout.write("_")
        }
        console.log('라고 답변하였지.')
        return
    }
    else{
        for(let i=0;i<s.length;i++){
            for(let j=0;j<space;j++){
                process.stdout.write("_")
            }
            console.log(s[i])
        }
        speak(n-1,space+4)
        for(let j=0;j<space;j++){
            process.stdout.write('_')
        }
        console.log('라고 답변하였지.')
    }


}


speak(+input[0],0)