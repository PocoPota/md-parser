import parser from "./src/parser";
import generator from "./src/generator";

export default function mdToHtml(markdown: string) {
  const ast = parser(markdown);
  const html = generator(ast);
  return html;
}
