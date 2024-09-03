"use strict";

// 🛎️ 문제 설명: 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ reduce method
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// 💡 reduce method
// This is how the reduce method works.
// * reduce: 모든 어레이 밸류를 어떤 조건으로 하나의 값으로 만든다.
// 이 경우에는 새로운 어레이를 리턴하지 않고 💫하나의 reduced value💫만 출력한다.
// EXAMPLE 1) when using Arrow function (=>)
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// EXAMPLE 2) when using just basic function
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur; // current one(acc) + new current value(cur)
  // ... initial value(i = 0) + current value in the 🚦previous iteration
  // >> In each iteration, we return the updated accumulator (acc + cur)
}, 0); // 0 : starter as the initial value. (>> index number: 0, simply specify zero here.)

// 🌟 starter가 중요한 게, acc = i + cur "current value in the previous iteration"에서 previous iteration이라는 말을 make sense하게 해준다.
// starter의 index number가 0이기 때문에 index number가 1로 넘어갈 땐, 원래 0자리였던 200을 더해줘야 한다.
// 즉, i=0을 거쳐 i=1으로 넘어갈 땐, 이보다 previous iteration인 200(원래 i=0)이라는 값을 starter에 더해줘야 한다.
// 그 후엔, 더 이상 starter값(= 0)이 아닌, i=2로 넘어갈 땐, initial value(= 200)에 i=1값이었던, 450을 더해줘야 하기 때문에,
// 현재 Iteration보다 previous iteration의 current value를 더해줘야 한다고 설명한 이유.. 결국 모든게 starter의 존재 때문!

// 🛎️ 문제 설명: 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = 45;
  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ reduce method
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 🛎️ 문제 설명: array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  let answer = [];
  for (const num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }

  if (!answer[0]) {
    return [-1];
  }

  const sorted = answer.sort((a, b) => a - b);

  return answer;
}

// 😲 다른 사람의 풀이
// ✅ filter method, sort method
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 💡 filter method: specified test condition을 통과하는 array elements
// 만을 포함하는 💫새로운 어레이를 리턴💫한다.
const deposits = movements.filter(function (mov) {
  // ☝️ (mov, i, arr) 라고 쓸 순 있지만,
  //  filter method에서 이렇게 쓰는 경우는 없다고 한다. (선생님이 한번도 이렇게 쓰지 않는다고 함)
  return mov > 0;
});
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); // [200, 450, 3000, 70, 1300]

// 💡 sort method
// This is how the sort callback function works.
// ▶️ return < 0, A, B (⚡️keep order / A will be before B)
// : 리턴값이 (-)면 순서 그대로!
// ▶️ return > 0, B, A (💥switch order / B will be before A)
// : 리턴값이 (+)면 순서 바꿔라!

// i) ascending order (갈수록 올라가는 오름차순)
movements.sort((a, b) => {
  // 💥이때, 원래 순서가 a, b 이라는 걸 명심.
  if (a > b) return 1; // a가 크고, 오름차순이면 뒤로 가야 하기 떄문에 자리 바꿔서 b, a가 돼야 함 -> 양수(1)
  if (a < b) return -1;
});

// 👉 we can improve this dramatically and simplify!!!!
// 꼭 -1, 1이 아니더라도 0보다 큰 값, 작은 값이 나오면 되니까 내림차순으로 배열하고 싶다면
// a > b 일 때도, b > a일 때도, b - a값으로 설정해 각각 -값, +값이 출력되도록 한다면
movements.sort((a, b) => a - b);
// 📌 a > b (+ : 둘의 자리가 바뀌어 b, a로 바뀜 => 결국 오름차순)
// 📌 b > a (- : 아무 일도 안 일어나 a, b 그대로 => 결국 오름차순)

// ii) descending order (갈수록 내려가는 내림차순)
movements.sort((a, b) => {
  if (a > b) return -1; // a가 크고, 내림차순이면 앞으로 가야 하기 때문에 자리 바꾸지 말고 그 자리 -> 음수(-1)
  if (a < b) return 1;
});

// 👉 we can improve this dramatically and simplify!!
movements.sort((a, b) => b - a);
// 📌 a > b (- : 아무 일도 안 일어나 a, b 그대로 => 결국 내림차순)
// 📌 b > a (+ : 둘의 자리가 바뀌어 b, a로 바뀜 => 결국 내림차순)

// 🛎️ 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }

  return answer;
}

// 😲 다른 사람의 풀이
// ✅ repeat method & slice method
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

// 💡 repeat method
// EXAMPLE 1)
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// EXAMPLE 2)
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)

// 💡 slice method
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
