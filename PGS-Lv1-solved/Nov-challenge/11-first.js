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

// JadenCase 문자열 만들기 (11/9 Sat)
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
