function solution(arr1, arr2) {
    let answer = [];
    const idx = arr1[0].length;
    
    for (let i = 0; i < arr1.length; i++) {
      let sumArray = [];
       for (let j = 0; j < idx; j++) {
         sumArray.push(arr1[i][j] + arr2[i][j]);
       }
      answer.push(sumArray);
    }
    return answer;
}