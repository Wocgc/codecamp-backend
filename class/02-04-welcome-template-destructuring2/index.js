// 02-04-welcome-template-destructuring-2 / index.js

function getWelcomeTemplate({ name, age, school, createdAt }) {
  return `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다.</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}살</div>
              <div>학교: ${school}</div>
              <div>가입일: ${createdAt}</div>
          </body>
      </html>
  `;
}

const name = "규철";
const age = 23;
const school = "인덕대학교";
const createdAt = "2022-01-17";

// const myUser = {
//   name,
//   age,
//   school,
//   createdAt,
// };

// shorthand property names 적용
getWelcomeTemplate({ name, age, school, createdAt });
// getWelcomeTemplate({{ name:"규철", age:23, school:"인덕대학교", createdAt:"2022-01-17" }})
