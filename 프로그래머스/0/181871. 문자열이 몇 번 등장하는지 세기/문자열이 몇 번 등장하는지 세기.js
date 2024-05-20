function solution(myString, pat) {
 let answer = 0;
    let patIdx = pat.length
    for(let i = 0; i < myString.length; i++){
       const cur = myString.slice(i, patIdx + i)
       if(cur === pat){
           answer += 1
       }
    }
    return answer;
}
