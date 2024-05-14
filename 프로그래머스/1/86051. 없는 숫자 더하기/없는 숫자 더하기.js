function solution(numbers) {
    var answer = -1;
    
    let num = 0
    
    for(let i=0; i<numbers.length; i++){
        num += numbers[i]    
    }
    answer = 45 - num // 0 ~ 9 더한 값이 45 [ 45 - 배열의 합 ]을 하면 없는 수의 합이 된다
    
    return answer;
}