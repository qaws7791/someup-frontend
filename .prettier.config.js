/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80, // 기본값. 줄바꿈 할 줄의 길이
  tabWidth: 2, // 기본값. 들여쓰기 수준당 공백 수
  useTabs: false, // 기본값. 탭 대신 공백을 사용하여 들여쓰기
  semi: true, // 기본값. 라인의 끝에 세미콜론을 자동으로 붙여줄지 결정. true - 모두 추가, false - ASI 오류가 발생할 수 있는 줄의 시작 부분에만 추가
  singleQuote: true, // 기본값 false. 문자열을 싱글 쿼트로 변경. "This \"example\" is single quoted" -> 'This "example" is single quoted'
  trailingComma: "all", // 기본값. 객체, 배열 등의 마지막 요소 뒤에 콤마를 붙여줄지 결정. all - 항상 붙여줌, none - 붙이지 않음, es5 - ES5에서 유효한 위치에만 붙임
  bracketSpacing: true, // 기본값. 객체 리터럴에서 { 뒤와 } 앞에 공백을 추가할지 결정
  bracketSameLine: false, // 기본값. 객체 리터럴의 { 를 같은 줄에 표시할지 결정
  arrowParens: "always", // 기본값. 화살표 함수의 인자가 하나일 때 괄호를 붙여줄지 결정. always - 항상 붙여줌, avoid - 하나일 때 붙이지 않음
};

export default config;
