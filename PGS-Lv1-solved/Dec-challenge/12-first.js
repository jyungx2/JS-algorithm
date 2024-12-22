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
