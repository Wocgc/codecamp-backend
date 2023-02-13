const apple = 3;
const banana = 2;

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 갖고 있습니다.`);

function getWelcomeTemplate({ name, age, school, createdAt }) {
  const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;
  console.log(result);
}
const myuser = {
  name: "규철",
  age: 24,
  school: "인덕대학교",
  createdAt: "2022-01-17",
};

getWelcomeTemplate(myuser);
