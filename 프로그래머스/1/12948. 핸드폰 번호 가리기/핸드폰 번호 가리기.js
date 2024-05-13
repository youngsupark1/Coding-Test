function solution(phone_number) {
    var answer = '';

    const num = phone_number.split('')
    for(let i = 0; i < num.length; i++){
        if(i < num.length - 4){
            answer += '*'
        }else{
            answer += num[i]            
        }
    }
    return answer;
}