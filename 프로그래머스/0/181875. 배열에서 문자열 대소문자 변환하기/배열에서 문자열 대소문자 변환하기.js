function solution(strArr) {
    const answer = strArr.map((strA, idx) => {
        if(idx  % 2 === 0) {
            return strA.toLowerCase();
        } else {
            return strA.toUpperCase();
        }
    });
    return answer;
}