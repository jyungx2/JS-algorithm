"use strict";

// 자릿수 더하기 (9/15 Fri)
// 🛎️ 문제 설명: 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
function solution(n) {
  let answer = 0;
  const array = (n + "").split("");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    answer += Number(array[i]);
  }

  return answer;
}

// 😲 다른 사람의 풀이
// ✅ reduce method
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 중복된 숫자 개수 (9/15 Fri)
// 🛎️ 문제 설명: 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) answer++;
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ filter method
function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
