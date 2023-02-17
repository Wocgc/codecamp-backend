// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API 서버 실행(3000) => listen(접속을 기다림)
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
