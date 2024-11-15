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
      answer[++j] = 1;
    }
  }

  return answer;
}
