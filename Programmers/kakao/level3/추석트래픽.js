function solution (lines) {
    const times = [];


    // 1. 주어진 구간 을 초로 변환 시킴 
    for(const line of lines) {
        let[days,time,duration]=line.split(' ')
        // 밀단위
        let endtime=getSecondtoMill(time)
        let start_time=getStartTimetoMill(duration,endtime)+1



        console.log(start_time,endtime)

    }

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
    


solution([
    '2016-09-15 03:10:33.020 0.011s'
    ])