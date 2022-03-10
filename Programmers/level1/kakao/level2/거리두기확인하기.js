const dx=[0,1,0,-1]
const dy=[1,0,-1,0]

let flag=false
var answer = [];
let map=[]
let visited=[]


const dfs=(cur_x,cur_y,start_x,start_y,dist)=>{
    visited[cur_x][cur_y]=true
    
    if(dist<=2 && dist>0){
        if(map[cur_x][cur_y]=='P'){
            flag=true
            return
        }
    }

    for(let i=0;i<4;i++){
        next_x=dx[i]+cur_x
        next_y=dy[i]+cur_y
        d=Math.abs(start_x-next_x)+Math.abs(start_y-next_y)
        if(next_x>=0 && next_y>=0 && next_x<5 && next_y<5 && d<=2){
            if(map[next_x][next_y]!='X' && visited[next_x][next_y]==false){
               dfs(next_x,next_y,start_x,start_y,d)
            }
        }
    }
    return
}

function solution(places) {

    
    for(let i=0;i<places.length;i++){
        let temp=places[i]
        visited=[]
        map=[]
        for(let j=0;j<temp.length;j++){
            let temp_map=[]
            let temp_visit=[]
            for(let z=0;z<temp[j].length;z++){
                temp_map.push(temp[j][z])
                temp_visit.push(false)
            }
            map.push(temp_map)
            visited.push(temp_visit)
        }

        flag=false
        for(let q=0;q<5;q++){
            for(let w=0;w<5;w++){
                if(map[q][w]=='P' && visited[q][w]==false){
                    dfs(q,w,q,w,0)
                    if(flag)break
                }
            }
            if(flag)break
        }


        if(flag){
            answer.push(0)
        }
        else{
            answer.push(1)
        }
    }

    return answer;
}
//solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]])