import ast from "../datas/sample_mim.json";
import generator from "./generator";

const html = generator(ast);

console.log(html);