"use strict";

// 양꼬치 (9/8 Sun)
// 🛎️ 문제 설명: 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

function solution(n, k) {
  const totalPrice = n * 12000 + (k - Math.trunc(n / 10)) * 2000;

  return totalPrice;
}

// 아이스 아메리카노 (9/8 Sun)
// 🛎️ 문제 설명: 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
  const answer = [];

  const coffeeNum = Math.trunc(money / 5500);
  answer.push(coffeeNum);

  const change = money % 5500;
  answer.push(change);

  return answer;
}

// 😲 다른 사람의 풀이
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

// 문자열 뒤집기 (9/9 Mon)
// 🛎️ 문제 설명: 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 😲 다른 사람의 풀이
// ✅ spread operator (...) instead of split('')
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}

// 짝수는 싫어요 (9/9 Mon)
// 🛎️ 문제 설명: 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

// 배열 자르기 (9/9 Mon)
// 🛎️ 문제 설명: 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 😲 다른 사람의 풀이
// ✅ Splice method
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

// 머쓱이보다 키 큰 사람 (9/9 Mon)
// 🛎️ 문제 설명: 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ filter method => 다른사람왈: 새 배열을 만드는 낭비??
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

// 문자 반복 출력하기 (9/10 Tue)
// 🛎️ 문제 설명: 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 1; j <= n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ ...spread operator & map & repeat & join method
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// 짝수 홀수 개수 (9/10 Tue)
// 🛎️ 문제 설명: 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(num_list) {
  var answer = [0, 0];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  }

  return answer;
}

// 😲 다른 사람의 풀이
// ✅ 짝수 홀수의 나머지를 인덱스로 활용한 센스 ~!
// 'variable += 1;' = 'variable ++;'
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// 짝수 홀수 개수 (9/11 Wed)
// 🛎️ 문제 설명: 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
function solution(a, b, flag) {
  let answer = flag ? a + b : a - b;
  return answer;
}
