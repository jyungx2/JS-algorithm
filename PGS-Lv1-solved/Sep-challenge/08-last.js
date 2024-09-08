"use strict";

// 정수 내림차순으로 배치하기 (9/1 Sun)
// 🛎️ 문제 설명: 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  const splited = (n + "").split("");

  const sorted = splited.sort().reverse();

  const final = parseInt(sorted.join(""));

  return final;
}

console.log(solution(118372));

// 두 정수 사이의 합 (9/1 Sun)
// 🛎️ 문제 설명: 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

// 하샤드 수 (9/1 Sun)
// 🛎️ 문제 설명: 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
function solution(x) {
  let answer = true;
  const y = (x + "").split("");
  console.log(y);

  let sum = 0;
  for (const number of y) {
    sum += parseInt(number);
  }

  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

// 서울에서 김서방 찾기 (9/1 Sun)
// 🛎️ 문제 설명: String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
function solution(seoul) {
  let answer = "";

  const idx = seoul.indexOf("Kim");
  answer = `김서방은 ${idx}에 있다`;
  //   for (let i = 0; i < seoul.length; i++) {
  //     if (seoul[i] === "Kim") {
  //       answer = `김서방은 ${i}에 있다`;
  //     }
  //   }

  return answer;
}

// 콜라츠 추측 (9/1 Sun)
// 🛎️ 문제 설명: 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

function solution(num) {
  let answer = 0;

  while (num !== 1 && answer < 500) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    answer++;
  }

  return num === 1 ? answer : -1;
}
