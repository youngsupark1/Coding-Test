function solution(x) {
    let num = x;
    let sum = 0;
    const len = [...x+''].length;
    
    for(let i=0; i<len; i++){
        sum += x % 10;
        x = ~~(x / 10);
    }
   
    return !(num % sum)
}