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

// 가까운 1 찾기 (9/16 Mon)
// 🛎️ 문제 설명: 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요. 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다
function solution(arr, idx) {
  var answer = -1;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return answer;
}

// 😲 다른 사람의 풀이
const solution = (a, i) => a.indexOf(1, i);

// 카운트업 (9/16 Mon)
// 🛎️ 문제 설명: 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

function solution(start, end) {
  idx = start;
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}

// 등수매기기 (9/16 Mon)
// 🛎️ 문제 설명: 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
