// generator開発

// import ast from "../datas/gen_sample_mim.json";
// import generator from "./generator";

// const html = generator(ast);

// ファイルへ書き込み
// import fs from "fs";
// fs.writeFile("./datas/gen_sample.html", html, (err: NodeJS.ErrnoException | null) => {
//   if (err) throw err;
//   console.log('正常に書き込みが完了しました');
// });

import parser from "./parser";
import {readFileSync} from "fs";
import path from "path";

const filePath = path.join(__dirname, "..", "datas", "prs_sample.md");
const markdown = readFileSync(filePath, "utf-8");
console.log('%o', parser(markdown));