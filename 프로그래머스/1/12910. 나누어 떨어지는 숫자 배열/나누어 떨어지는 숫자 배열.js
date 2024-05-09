function solution(arr, divisor) {
    var answer = [];
    var lenArr = arr.length;
    
    for (var i = 0; i < lenArr; i++){
        if((arr[i] % divisor) === 0){
            answer.push(arr[i]);
        }
    }
    answer.sort((a, b) => a - b);
    if(answer.length === 0){
        answer = [-1];
    }
    return answer;
}