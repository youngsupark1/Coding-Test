function solution(s) {
  return s.split('').sort().reverse().join('');
    
}

// 1. s.split('') : 각각의 문자로 분리하여 배열로 변환
// 2. .sort() : 배열을 오름차순으로 정렬
// 3. .reverse() : 배열의 순서를 반대로 뒤집는다.
// 4. .join('') : 배열의 모든 요소를 하나의 문자열로 결합