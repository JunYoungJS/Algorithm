function timesToMinute(time){
    let t=time.split(':')
    let a_time=parseInt(t[0])*3600+parseInt(t[1])*60
    return a_time
}

function solution(fees, records) {
    let temp = [];
    let newrecords=new Map() 
    let answer=[]
    
    // 1 . records 배열 파싱 => 차량번호 : [머무른시간] = newrecords
    for(let i=0;i<records.length;i++){
        const tmp=records[i].split(' ')
        const name=tmp[1]
        const time=tmp[0]
        
        if(newrecords.get(name)==undefined){
            newrecords.set(name,new Array())
            newrecords.get(name).push(time)
        }
        else{
            newrecords.get(name).push(time)     
        }
    } 

    // 2. newrecords 배열로 IN - Out을 해서 [번호판 : 해당 차량 누적시간 ] 분단위로 구함 
    for(const value of newrecords){
        const times=value[1]
        let sum=0
        if(times.length%2!=0){
            times.push('23:59')
        }
        while(times.length!=0){
            let e=times.pop()
            let s=times.pop()
            let t=Math.abs(timesToMinute(e)-timesToMinute(s))
            sum+=Math.floor(t/60)
        }
        temp.push([value[0],sum])
    }

    // 차량 번호 작은순으로 정렬 
    temp.sort((a,b)=>{
        return a[0]-b[0]
    })
  
    // 3. 주차요금 계산 [누적시간 저장 temp]
    for(let i=0;i<temp.length;i++){
        let time=temp[i][1]
        let number=0
        if(time>fees[0]){
            if((time-fees[0])%fees[2]!=0){
                number=fees[1]+Math.ceil((time-fees[0])/fees[2])*fees[3]
            }
            else{
                number=fees[1]+Math.floor((time-fees[0])/fees[2])*fees[3]
            }
        }
        else{
            number=fees[1]
        }
        answer.push(number)
    }
    return answer;
}


//solution([180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
solution([120, 0, 60, 591],["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"])
solution([1, 461, 1, 10],["00:00 1234 IN"])