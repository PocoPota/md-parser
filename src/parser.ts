import { Token } from "./modules/token";

const parser = (markdown: string) => {
  const ast: Array<Token> = [];

  const _parser = (node: string) => {
    // 空白が渡された場合
    if (!node) {
      return [];
    }

    let part_ast: Array<Token> = [
      {
        type: "text",
        value: node,
      },
    ];
    const regex = /(\*\*)(.*?)\1/;
    const matched = node.match(regex);
    if (matched) {
      part_ast = [
        ..._parser(node.slice(0, matched.index)),
        {
          type: "strong",
          children: [..._parser(matched[2])],
        },
        ..._parser(node.slice((matched.index || 0) + matched[0].length)),
      ];
    }
    return part_ast;
  };

  // １行ごとに処理
  const lines = markdown.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    let part_ast: Array<Token> = [];
    if (line.startsWith("#")) {
      const part_string = line.split(" ");
      for (let j = 0; j < part_string[0].length; j++) {
        if (part_string[0][j] != "#") return _parser(line);
      }
      part_ast = [
        {
          type: "heading",
          level: part_string[0].length,
          children: [..._parser(line.slice(part_string[0].length + 1))],
        },
      ];
    } else {
      part_ast = [
        {
          type: "paragraph",
          children: [..._parser(line)],
        },
      ];
    }

    ast.push(...part_ast);
    i++;
  }

  // return ast;
  return ast;
};

export default parser;
