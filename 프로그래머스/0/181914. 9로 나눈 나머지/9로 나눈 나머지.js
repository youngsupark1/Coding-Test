function solution(number) {
    let nux = 0;
    for (let i = 0; i < number.length; i++) {
        nux += Number(number[i])
    }
    return answer = nux % 9;
}