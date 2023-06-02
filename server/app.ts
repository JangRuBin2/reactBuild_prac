import express from "express";
import path from "path";
const root = path.join(__dirname, '../');
console.log(root)
const app = express();
// 루트 경로 미들웨어
app.use(express.static(path.join(root)));
app.get('/', (req, res)=> {
  res.sendFile('index.html', {root : root});
})
app.listen(8080, ()=> {
  console.log("서버 실행")
})
