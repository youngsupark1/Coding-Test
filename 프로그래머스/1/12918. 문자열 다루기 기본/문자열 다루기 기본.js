function solution(s) {
  const len = s.length;
  const answer =
    len === 4 || len === 6 
  	? [...s].every(str => +str >= 0)
  	: false;
  return answer;
}