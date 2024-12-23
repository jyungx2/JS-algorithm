// 코딩테스트 고득점 Kit - 스택/큐 - 복습
// 스택: 선입후출
// 큐: 선입선출

// 1. 같은 숫자는 싫어! (9/5 Thur -> 12/22 Sun)
// 🛎️ 문제 설명: 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.

// 문제 풀이
function solution1(arr) {
  const answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 다른 풀이
function solution2(arr) {
  return arr.filter((val, i) => val !== arr[i + 1]);
}

// 2. 기능개발 (11/15 Fri -> 12/22 Sun)
// 🛎️ 문제 설명: 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 문제 풀이
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
      count++;
    } else {
      arrForDeploy.push(count);
      count = 1;
      maxDay = arrForDay[i];
    }
  }
  arrForDeploy.push(count);

  return arrForDeploy;
}

// 3. 올바른 괄호 (11/17 Sun -> 12/23 Mon)
// 🛎️ 문제 설명: 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
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

// 프로세스 (11/20 Wed -> 12/23 Mon)
// 🛎️ 문제 설명: 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
// 3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

function solution(priorities, location) {
  let queue = priorities.map((priority, idx) => ({ priority, idx }));
  console.log(queue);

  let executionOrder = 0;

  while (queue.length > 0) {
    // 맨 앞 프로세스를 꺼냄: shift() <-> 맨 뒤 요소를 꺼냄: pop()
    let current = queue.shift();

    // 나머지 프로세스 중 우선순위가 더 높은 프로세스가 있는지 확인
    const hasHigherPriority = queue.some((p) => p.priority > current.priority);

    if (hasHigherPriority) {
      // 우선순위가 높은 프로세스가 있을 시, 다시 큐 끝에 추가
      queue.push(current);
    } else {
      // 실행 (종료)
      executionOrder++;

      if (current.idx === location) {
        return executionOrder;
      }
    }
  }
}
