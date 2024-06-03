function solution(str_list, ex) {
    let answer = '';
    str_list.map((value) => {
        if(!value.includes(ex)){
            answer += value
        }
    })
    return answer;
}