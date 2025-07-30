import parser from "./src/parser";
import generator from "./src/generator";
export default function parseMarkdown(markdown) {
    const ast = parser(markdown);
    const html = generator(ast);
    return html;
}
export { parseMarkdown };
