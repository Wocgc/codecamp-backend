import { checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail } from "./email.js";

function createUser(user) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const template = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail(user.email, template);
  }
}

// 들어오는 값
const myUser = {
  name: "규철",
  age: 23,
  school: "인덕대학교",
  email: "choigyucheol@naver.com",
};

createUser(myUser);
