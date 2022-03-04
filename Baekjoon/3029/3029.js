function time(seconds) { 
    var hour = parseInt(seconds/3600) < 10 ? '0'+ parseInt(seconds/3600) : parseInt(seconds/3600); 
    var min = parseInt((seconds%3600)/60) < 10 ? '0'+ parseInt((seconds%3600)/60) : parseInt((seconds%3600)/60); 
    var sec = seconds % 60 < 10 ? '0'+seconds % 60 : seconds % 60; 
  
    console.log(`${hour}:${min}:${sec}`)
} 


const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');
let s=input[0].split(':')
let e=input[1].split(':')

let s_h=+s[0]
let s_m=+s[1]
let s_s=+s[2]
let e_h=+e[0]
let e_m=+e[1]
let e_s=+e[2]

let a_second=0


while (true){
    if(s_h==e_h && s_m==e_m && s_s==e_s){
        break
    }

    if(s_h==24){
        s_h=0
        continue
    }
    if(s_m==60){
        s_h+=1
        s_m=0
        continue
    }
    if(s_s==60){
        s_m+=1
        s_s=0
        continue
    }
    a_second+=1
    s_s+=1
}
if(a_second==0){
    console.log("24:00:00")
}
else{
    time(a_second)
}