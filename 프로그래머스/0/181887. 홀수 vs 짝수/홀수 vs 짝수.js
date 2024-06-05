function solution(num_list) {
    let newNum = 0
    let nowNum = 0
    
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0 ) {
            newNum += num_list[i];
        } else {
            nowNum += num_list[i];
        }
    }
    return Math.max(newNum, nowNum);
}