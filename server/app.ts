import express from "express";
import path from "path";
const root = path.join(__dirname, '../');
// console.log(root)
const app = express();
// 루트 경로 미들웨어
app.use(express.static(path.join(root)));
// 최초 접속 요청 처리
app.get('/', (req, res)=> {
  res.sendFile('index.html', {root : root});
})
// 서버 실행
app.listen(8080, ()=> {
  console.log("서버 실행")
})
