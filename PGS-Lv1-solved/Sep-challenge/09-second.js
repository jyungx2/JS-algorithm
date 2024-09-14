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

// 문자열 곱하기 (9/12 Thu)
// 🛎️ 문제 설명: 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, k) {
  return (answer = my_string.repeat(k));
}

// 배열의 유사도 (9/13 Fri)
//  🛎️ 문제 설명: 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) answer++;
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ filter function(method)
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

// 분수의 덧셈 (9/13 Fri)
// 🛎️ 문제 설명: 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 💥이 문제의 핵심은, 최대한 간단하게 풀 방법을 찾고, 최대공약수 구하는 방법을 찾는 것.

// ✔️ 유클리드 호제법을 이용한 최대공약수, 최소공배수 구하는 방법:
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
// ----------------------------------------------------------

function solution(numer1, denom1, numer2, denom2) {
  const answer = [];

  const a = numer1 * denom2 + numer2 * denom1; // ✔️ 분자 계산
  const b = denom1 * denom2; // ✔️ 분모 계산

  // ✔️ 최대공약수 구하기
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  answer.push(a / gcd(a, b), b / gcd(a, b));

  return answer;
}

// 😲 다른 사람의 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); // 최대공약수

  return [denum / gcd, num / gcd];
}

// 피자 나눠먹기 (3) (9/14 Sat)
// 🛎️ 문제 설명: 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(slice, n) {
  let answer = 0;
  if (n % slice === 0) {
    answer = n / slice;
  } else {
    answer = Math.trunc(n / slice + 1);
  }
  return answer;
}

// 😲 다른 사람의 풀이 : + 1해줄 필요 없이, 나눴을 때 자연수로 안 떨어지면 무조건 올려버림!!
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 옷가게 할인 받기 (9/14 Sat)
// 🛎️ 문제 설명: 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
function solution(price) {
  let priceAfterSale;
  if (price >= 500000) {
    priceAfterSale = Math.trunc(price - price * 0.2);
  } else if (price >= 300000) {
    priceAfterSale = Math.trunc(price - price * 0.1);
  } else if (price >= 100000) {
    priceAfterSale = Math.trunc(price - price * 0.05);
  }

  return priceAfterSale;
}

// 😲 다른 사람의 풀이
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};

// 피자 나눠 먹기(1) (9/14 Sat)
// 🛎️ 문제 설명: 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
  let answer = n % 7 === 0 ? n / 7 : Math.ceil(n / 7);
  return answer;
}

function solution(n) {
  return Math.ceil(n / 7);
}
