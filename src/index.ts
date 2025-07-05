import parser from "./parser";
import generator from "./generator";

export default function mdToHtml(markdown: string) {
  const ast = parser(markdown);
  const html = generator(ast);
  return html;
}
