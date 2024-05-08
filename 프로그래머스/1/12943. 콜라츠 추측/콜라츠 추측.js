function solution(num) {
    let answer = 0;
    while (num !== 1) {
        if (answer === 500) { // 500번 반복했는데도 1이 되지 않은 경우
            return -1;
        }
        if (num % 2 === 0) { // 짝수인 경우
            num /= 2;
        } else { // 홀수인 경우
            num = num * 3 + 1;
        }
        answer++; // 작업 횟수 증가
    }
    return answer;
}