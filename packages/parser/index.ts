import parser from "./src/parser";
import generator from "./src/generator";

export default function parseMarkdown(markdown: string): string {
  const ast = parser(markdown);
  const html = generator(ast);
  return html;
}

export { parseMarkdown };
