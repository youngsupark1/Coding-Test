function solution(a, b) {
    let arr = [];
    for(let i = 0; i < a.length; i++){
        arr.push(a[i] * b[i]);
    }
    return arr.reduce((a, c) => a + c, 0);
}

