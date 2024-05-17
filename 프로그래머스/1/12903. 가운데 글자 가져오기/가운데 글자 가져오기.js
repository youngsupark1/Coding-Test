function solution(s) {
    const len = Math.floor(s.length / 2);
    
    return s.length % 2 == 0 ? s[len - 1] + s[len] : s[len];
}