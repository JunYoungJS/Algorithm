// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B6%94%EC%84%9D-%ED%8A%B8%EB%9E%98%ED%94%BD-JS 참조 

function solution (lines) {
    const times = [];

    answer=0
    // 1. 주어진 구간 을 초로 변환 시킴 
    for(const line of lines) {
        let[days,time,duration]=line.split(' ')
        // 밀단위
        let endtime=getSecondtoMill(time)
        
    
        let start_time=getStartTimetoMill(duration,endtime)+1
        //  마지막 구간에 +999를 해서 초당 처리량에 해당되는 범위를 전부 잡을수있음 
        endtime+=999



        times.push(["Start",start_time])
        times.push(["End",endtime])
    }

    times.sort(sorting)
    cnt=0
    for(let i=0;i<times.length;i++){
        if(times[i][0]=='Start'){
            cnt+=1
        }
        else{
            cnt-=1
        }
        answer=Math.max(cnt,answer)
    }
    return answer
 }

 const getSecondtoMill=(time)=>{
     let hours=+(time[0]+time[1])*3600
     let minute=+(time[3]+time[4])*60
     let second=+(time[6]+time[7])
     let mills=+(time[9]+time[10]+time[11])
     return (hours+minute+second)*1000+mills

 }
 const getStartTimetoMill=(duration,time)=>{
    // 밀리초 단위로
     let number=duration.substr(0,duration.length-1)*1000
     return time-number
 }
    
const sorting=(a,b)=>{
    
    if(a[1]==b[1]){
        return -1
    }
    else{
        return a[1]-b[1]
    }
}




//   solution([
//     "2016-09-15 01:00:04.002 2.0s",
//     "2016-09-15 01:00:07.000 2s"
//     ])

// solution([
//     "2016-09-15 01:00:04.001 2.0s",
//     "2016-09-15 01:00:07.000 2s"
//     ])