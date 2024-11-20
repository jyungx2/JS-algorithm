// 기능개발 (11/15 Fri)
// 🛎️ 문제 설명: 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

function solution(progresses, speeds) {
  const arrForDay = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  console.log(arrForDay);

  const arrForDeploy = [];
  let count = 1;
  let maxDay = arrForDay[0]; // 현재 배포 기준일

  for (let i = 1; i < arrForDay.length; i++) {
    if (arrForDay[i] <= maxDay) {
      // 현재 작업이 배포 기준일 이하이면 같은 배포 그룹에 포함
      count++;
    } else {
      // 새 배포 그룹 시작
      arrForDeploy.push(count);
      count = 1;
      maxDay = arrForDay[i];
    }
  }
  // 마지막 그룹 추가
  arrForDeploy.push(count);

  return arrForDeploy;
}

solution([93, 30, 55], [1, 30, 5]); // [2, 1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]

// 😲 다른 사람의 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      // ++j는 증가된 값이 즉시 반영되므로, "증가된 값이 필요"한 경우 적합. => 값을 먼저 증가시켜야 할 때.
      // j++는 기존 값을 먼저 사용하므로, "증가 전에 현재 값이 필요"할 때 유용. => 현재 값을 사용한 후에 증가시키고 싶을 때
      answer[++j] = 1;
    }
  }

  return answer;
}

let array = [10, 20, 30];
let j = 0;

console.log(array[j++]); // 10 (j가 사용된 후 증가)
console.log(j); // 1

// 올바른 괄호 (11/17 Sun)
// 🛎️ 문제 설명: 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 🖍️ 단순 if-else절과 for loop를 이용한 풀이
function solution(s) {
  let left = 0;

  // 첫번째가 ')'이거나 마지막이 '('인 경우 바로 false 반환
  // if (s[0] === ')' || s[s.length - 1] === '(') {
  //     return false;
  // }

  for (const paren of s) {
    if (paren === "(") {
      left++;
    } else {
      left--;
    }
    // left += paren === '(' ? 1 : -1;

    // 괄호의 개수 차가 음수가 되면, 닫는 괄호가 먼저 나온 경우이므로 false
    if (left < 0) {
      return false;
    }
  }

  // 최종적으로 모든 괄호가 짝지어졌다면 left가 0이어야 함
  return left === 0;
}

// 🖍️ stack을 이용한 효율성 높은 풀이
function solution(s) {
  const stack = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      stack.push(")");
    } else if (s[i] === "(") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(solution("()()"));

// 프로세스 (11/20 Wed)
// 🛎️ 문제 설명: 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
function solution(priorities, location) {
  let queue = priorities.map((priority, idx) => ({ priority, idx }));

  // let executionOrder = 0;
  const executionQueue = []; // ✅ 내가 생각했던 방법..

  for (let i = 0; queue.length > 0; i++) {
    // 💥맨 앞 프로세스를 꺼냄: "shift()" <-> 맨 뒤 요소를 꺼냄: pop()
    let current = queue.shift(); // 🔑

    // 💥나머지 프로세스 중 우선순위가 더 높은 프로세스가 있는지 확인: "some()"
    // ...배열 중 다음 조건을 하나라도 만족하는 요소가 있다면 true 반환
    const hasHigherPriority = queue.some((p) => p.priority > current.priority); // 🔑

    if (hasHigherPriority) {
      // 우선순위가 높은 프로세스가 있을 시, 다시 큐 끝에 추가
      queue.push(current);
    } else {
      // 실행 (종료)
      // executionOrder++;

      // if (current.idx === location) {
      //   return executionOrder;
      // }
      executionQueue.push(current); // ✅ 위 코드 대신 사용
    }
  }
  return executionQueue.findIndex((queueEl) => queueEl.index === location) + 1; // ✅
}

// 🖍️ arr.shift() 대신 arr.splice(0, 1)[0]을 사용한 풀이
// splice는 slice()처럼 배열을 반환한다!
// ✨splice(): 삭제된 요소들을 (배열)형태로 반환.
let list = [1, 2, 3];
let removed = list.splice(0, 1); // 첫 번째 요소를 1개 삭제

console.log(removed); // [1] (배열로 반환됨)
console.log(list); // [2, 3] (원본 배열이 변경됨)

// ✨slice()
let list2 = [1, 2, 3, 4, 5];
let sliced = list.slice(1, 4); // 인덱스 1부터 3까지 (4는 제외)

console.log(sliced); // [2, 3, 4]
console.log(list2); // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)

function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
