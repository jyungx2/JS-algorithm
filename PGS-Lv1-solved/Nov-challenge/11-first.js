// 연속된 공백이 있을 경우, split(' ')은 그 공백을 하나의 구분자로 취급
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
