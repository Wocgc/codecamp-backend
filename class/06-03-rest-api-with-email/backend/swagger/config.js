export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나만의 미니프로젝트 API 명세서",
      versions: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"],
};
