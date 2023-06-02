"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const root = path_1.default.join(__dirname, '../');
// console.log(root)
const app = (0, express_1.default)();
// 루트 경로 미들웨어
app.use(express_1.default.static(path_1.default.join(root)));
app.use(express_1.default.static(path_1.default.join(root, 'dist')));
// 최초 접속 요청 처리
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: root });
});
// 서버 실행
app.listen(8080, () => {
    console.log("서버 실행");
});
