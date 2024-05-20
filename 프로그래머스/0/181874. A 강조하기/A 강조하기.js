function solution(myString) {
    let first = myString.toLowerCase();
    let second = first.replaceAll("a", "A")
    return second;
}