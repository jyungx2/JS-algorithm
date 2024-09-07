"use strict";

// 음양 더하기 (9/2 Mon)
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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// 없는 숫자 더하기 (9/2 Mon)
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

// 나누어 떨어지는 숫자 배열 (9/2 Mon)
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

// 핸드폰 번호 가리기 (9/3 Tue)
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
const animals = ["ant", "bison", "camel", "duck", "elephant"];
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

// 제일 작은 수 제거하기 (9/3~4 Wed, 🚨)
// 🛎️ 문제 설명: 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  let answer = [];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      answer.push(min);
      min = arr[i];
    } else if (arr[i]) {
      answer.push(arr[i]);
    }
  }
  if (!answer.length) {
    answer.push(-1);
  }

  return answer;
}

// 행렬의 덧셈 (9/4 Wed)
// 🛎️ 문제 설명: 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  const answer = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      answer[i][j] += arr2[i][j];
    }
  }
  console.log(answer);
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ map method
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}

// 😲 다른 사람의 풀이
// 내가 원래 풀려고 했던 방식❗️💥
function solution(arr1, arr2) {
  var answer = [[]]; // ❓ 실제로는 이 초기화가 특별히 필요하지는 않습니다.
  // 코드의 목적을 고려할 때, var answer = []로 초기화하는 것이 더 적절.
  // 코드 진행 중에 answer의 각 인덱스에 새 배열을 할당하기 때문에,
  // 처음에 var answer = []로 초기화해도 동일한 결과가 됩니다.
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = []; // 여기서 i 개수만큼의 어레이를 생성해 하위 루프에서 푸쉬하면
    // 어느 길이의 배열이 오든, 길이가 달라져도, 무조건 배열 개수 기준으로 배열이 생성되게 됨.
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

// 내적 (9/4 Wed)
// 🛎️ 문제 설명: 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 😲 다른 사람의 풀이
// ✅ reduce method
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// 문자열 내림차순으로 배치하기 (9/4 Wed)
// 🛎️ 문제 설명: 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
function solution(s) {
  var answer = [...s].sort().reverse().join("");
  // s.slice().sort((a, b) => b - a);
  // ⛔️ slice()는 어레이상에서만 쓸 수 있음.

  return answer;
}

// 부족한 금액 계산하기 (9/4 Wed)
// 🛎️ 문제 설명: 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다. 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요. 단, 금액이 부족하지 않으면 0을 return 하세요.
function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return money >= total ? 0 : total - money;
  // 🖍️if-else 절 쓰는 것보다 훨씬 빠르다! (2.27 ms VS 0.08 ms)
}

// 같은 숫자는 싫어! (9/5 Thur)
// 🛎️ 문제 설명: 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// 예를 들면, arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다. arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다. 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// ⛔️ 잘못된 나의 풀이
// splice method는 기존 어레이를 mutate시킨다는 점을 명심❗️
function solution(arr) {
  const answer = [...arr];
  const index = [];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i + 1]) {
      index.push(i + 1);
      // answer.splice(i + 1, 1); => 3연속 같은 숫자의 경우 통과 ❌
    }
  }

  for (let j = 0; j < index.length; j++) {
    answer.splice(j, 1);
  }

  return answer;
}

// ✨ 수정한 나의 풀이
function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
// 😲 다른 사람의 풀이
// ✅ filter method
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// 평균 계산하기 (9/6 Fri)
// 🛎️ 문제 설명: 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// 😲 다른 사람의 풀이
// ✅ reduce method
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// 가운데 글자 가져오기 (9/7 Sat)
// 🛎️ 문제 설명: 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
function solution(s) {
  const half = s.length / 2;

  if (s.length % 2 === 0) {
    return s[half - 1] + s[half];
  } else {
    return s[Math.trunc(half)];
  }
}

// 😲 다른 사람의 풀이
// ✅ substring method
// ⛔️ substr() method is no longer recommended(deprecated). Avoid using it❗️
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 🛎️ str.substr() vs str.slice() vs str.substring()
// 1) str.substr(start, length) => length: negative, it returns empty string.
let str = "01234";
console.log(str.substr(1, 3)); // Output: "123"

// 2) str.slice(beginIndex, endIndex)
console.log(str.slice(1, 4)); // Output: "123"
// slice method에서의 negative index는 substring과 다르게, 그대로 계산되어 출력된다!
// -1은 끝에서 첫번째, -2는 끝에서 두번째 이렇게...
// 따라서 밑에는 가장 마지막 인덱스인 4를 제외한(포함❌) 3까지 출력되는 것.
console.log(str.slice(1, -1)); // Same Output: "123"

// 3) str.substring(beginIndex, endIndex) (= slice() method🌟)
// 💥 Difference from slice(): If either argument is less than 0 or NaN, it is treated as 0.
// 👉 substring() treats negative values as 0. So, substring(1, -1) is treated as substring(1, 0), which extracts from 0 to 1 and returns "0".
console.log(str.substring(1, 4)); // Output: "123"
