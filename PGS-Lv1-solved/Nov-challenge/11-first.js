// JadenCase 문자열 만들기 (11/7 Thu)
// 🛎️ 문제 설명: JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고) 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요. 연속된 공백이 있을 경우, split(' ')은 그 공백을 하나의 구분자로 취급
const str1 = "hello   world";
const result1 = str1.split(" ");
console.log(result1);
// ["hello", "", "world"]

// 여기서는 공백이 세 번 연속으로 있으므로 두 개의 빈 문자열("")이 배열에 포함됩니다.
const str2 = "hello   world";
const result2 = str2.split(" ");
console.log(result2);
// ["hello", "", "", "world"]

function solution(s) {
  const words = s.split(" ");

  let makestring = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      makestring.push("");
    } else if (!isNaN(words[i][0])) {
      const new1 = words[i][0] + words[i].slice(1).toLowerCase();
      makestring.push(new1);
    } else {
      const new1 = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      makestring.push(new1);
    }
  }
  return makestring.join(" ");
}

// 😲 다른 사람의 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
// chartAt(index) VS str[index]
// charAt()을 사용하는 이유는 연속된 공백 때문에 split(" ") 메서드로 나누어진 배열에 빈 문자열이 포함될 수 있기 때문..
// 📌 charAt(index)는 메소드로, 범위 밖의 인덱스에 대해서 "빈 문자열"을 반환 -> 빈 문자열 상에 다른 메소드 사용해도 안전🆗
// 📌 대괄호 접근 (str[0])은 배열처럼 동작하지만, 범위 밖의 인덱스에 대해서는 "undefined"를 반환합니다. -> 💥에러 발생 원인💥
const str3 = "hello ";
console.log(str3.charAt(6)); // "" - 범위 밖 (빈 문자열 반환)
console.log(str3[6]); // undefined - 범위 밖 (undefined 반환)
// charAt(0)을 사용하는 방법은 빈 문자열을 안전하게 처리할 수 있다. (빈 문자열을 반환하는 경우에도 .toUpperCase() 등을 호출할 수 있다)

// substring(i, j)
const str4 = "hello world";
// 첫 번째 인덱스(i)부터 두 번째 인덱스(j) "이전"까지의 부분 문자열을 반환합니다.
console.log(str4.substring(0, 4)); // "hell"

// 두 번째 인덱스부터 끝까지 잘라냄
console.log(str4.substring(1)); // "ello world"

// 인덱스가 음수인 경우, ✨0으로 처리됨✨
console.log(str4.substring(-2, 4)); // "hell"
// 💥slice()와의 차이점: 음수 인덱스를 사용하면 문자열의 끝에서부터 인덱스를 계산할 수 있습니다.
console.log(str4.slice(-5)); // "world" - 음수 인덱스 사용(✨뒤에서부터 5글자✨)

// 인덱스가 순서대로 입력되지 않더라도 두 인덱스를 자동으로 교환하여 작동합니다.
console.log(str4.substring(4, 0)); // "hell"
// 💥slice()와의 차이점: start가 end보다 클 경우, 빈 문자열을 반환합니다 (자동으로 인덱스가 바뀌지 않습니다).
console.log(str4.slice(5, 0)); // "" - start가 end보다 크므로 빈 문자열 반환

// 완주하지 못한 선수 (11/8 Fri)
// 🛎️ 문제 설명: 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}

// 😲 소정님 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    if (!map.has(participant[i])) map.set(participant[i], 1);
    else map.set(participant[i], map.get(participant[i]) + 1);
  }

  // 💥 Map은 키-값 쌍을 저장하는 자료구조로, 하나의 키에는 하나의 값만 연결됩니다. 그래서 같은 키로 값을 설정하면 기존 값이 덮어쓰여서 하나의 값만 유지됩니다.
  // Map에서 특정 키의 값을 수정하려면 set 메서드를 사용해 새로운 값을 할당합니다.
  // 예를 들어, 이미 존재하는 키 'A'의 값을 2에서 1로 바꿀 때: map.set('A', 1);  // 'A'의 값이 1로 업데이트됨
  // => Map은 항상 최신 값만 유지하기 때문에, A => 2가 아니라 A => 1만 남게 됩니다.

  // 반면, Set은 값만 저장하며, 중복된 값을 허용하지 않는 자료구조입니다. Set에 값을 추가하면 이미 존재하는 값이더라도 중복 없이 단일 값으로만 저장됩니다.
  for (let i = 0; i < completion.length; i++) {
    if (map.get(completion[i]) >= 2)
      map.set(completion[i], map.get(completion[i]) - 1);
    else map.delete(completion[i]);
  }

  return map.keys().next().value;
}

// 문자열 다루기 기본 (11/9 Sat)
// 🛎️ 문제 설명: 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  let answer = true;

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return answer;
}

// 제일 작은 수 제거하기 (11/9 Sat)
// 🛎️ 문제 설명: 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
function solution(arr) {
  const answer = [...arr];
  let minNum = arr[0];

  if (arr.length < 2) return [-1];
  for (let i = 1; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }

  const index = answer.findIndex((el) => el === minNum);
  answer.splice(index, 1);

  return answer;
}

// 😲 가장 선호되는 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// 전화번호 목록 (11/11 Mon)
// 🛎️ 문제 설명: 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다. 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421

// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }

  return true;
}

// 😲 다른 사람의 풀이
// 1.
// some() 메서드는 배열의 요소 중 하나라도 조건을 만족하면 true를 반환
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}

// some(() => condition) : 연습!
// 문제 1: 배열에 5보다 큰 수가 하나라도 있는지 확인하기
const hasGreaterThanFive = function (arr) {
  return arr.some((num) => num > 5);
};
console.log(hasGreaterThanFive([1, 4, 6, 7, 10])); // true

// every(() => condition) : 연습!
const allHasGreaterThanFive = function (arr) {
  return arr.every((num) => num > 5);
};
console.log(allHasGreaterThanFive([1, 4, 6, 7, 10])); // false

// 문제 2: 배열에 짝수가 하나라도 있는지 확인하기
const hasEvenNumber = function (arr) {
  return arr.some((el) => el % 2 === 0);
};
console.log(hasEvenNumber([4, 7, 9, 11])); // true

// 문제 3: 문자열 배열에 "apple"이 하나라도 포함되어 있는지 확인하기
const hasApple = function (arr) {
  return arr.some((el) => el === "apple");
};
console.log(hasApple(["persimmon", "banana"])); // false

// 문제 4: 배열에 "hello"라는 문자열이 포함된 적어도 하나의 요소가 있는지 확인하기
function containsHello(arr) {
  return arr.some((el) => el.toLowerCase().includes("hello"));
}
console.log(containsHello(["hellomy", "bye"])); // true
console.log(containsHello(["Hello"]));
// false -(toLowerCase)-> true

// 2.
// indexOf는 문자열에서 특정 문자열이 처음 나타나는 인덱스를 반환하는 메서드
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
  }
  return true;
}

// 의상 (11/12 Tue)
// 🛎️ 문제 설명: 코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다. 예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

// [1] 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
// [2] 착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
// [3] 🌟코니는 하루에 최소 한 개의 의상은 입습니다🌟 => "마지막에 -1 해주는 이유"

function solution(clothes) {
  // 의상 종류별로 개수를 저장할 Map 생성
  const clothesMap = new Map();

  // 의상 정보를 clothesMap에 종류별로 정리
  for (const [name, type] of clothes) {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  }

  // 경우의 수 계산 (각 종류의 의상을 입지 않는 경우를 포함하기 위해 +1)
  let answer = 1;
  for (const count of clothesMap.values()) {
    answer *= count + 1;
    // 💥각 종류별 의상 수에 입지 않는 경우💥를 포함해 곱셈
  }

  // 최소 한 개의 의상은 입어야 하므로 전체 경우의 수에서 아무것도 입지 않은 경우(1)를 뺌
  return answer - 1;
}
