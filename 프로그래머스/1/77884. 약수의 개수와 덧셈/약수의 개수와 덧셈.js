// 제곱근이 정수면 약수의 개수가 홀수다..
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
      	// 제곱근이 정수인지 판단
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}