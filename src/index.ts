// generator開発

import parser from "./parser";
import generator from "./generator";
import { readFileSync, writeFile } from "fs";
import path from "path";

// ファイル取得
const filePath = path.join(__dirname, "..", "datas", "prs_sample.md");
const markdown = readFileSync(filePath, "utf-8");

const ast = parser(markdown);

const html = generator(ast);

// ファイルへ書き込み
writeFile("./datas/gen_sample.html", html, (err: NodeJS.ErrnoException | null) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});