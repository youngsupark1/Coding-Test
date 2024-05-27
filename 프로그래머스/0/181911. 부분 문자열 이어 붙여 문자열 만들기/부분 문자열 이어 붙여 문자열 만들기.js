function solution(my_strings, parts) {
    // my_strings 배열의 갯수만큼 반복문 돌리기
    // 반복분 내에서 해당 인자의 문자열을 잘라주기
    // (parts 기준)
    // 잘라낸 문자열을 다시 붙여주기
    let answer = '';
    for(let i = 0; i < my_strings.length; i++){
        answer += my_strings[i].slice(parts[i][0],parts[i][1]+1);
    }
    return answer;
}