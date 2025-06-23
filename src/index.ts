import ast from "../datas/gen_sample_mim.json";
import generator from "./generator";

const html = generator(ast);

// ファイルへ書き込み
import fs from "fs";
fs.writeFile("./datas/gen_sample.html", html, (err: NodeJS.ErrnoException | null) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});