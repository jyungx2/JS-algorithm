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
