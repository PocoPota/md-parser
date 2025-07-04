import { Token } from "./modules/token";

const parser = (markdown: string) => {
  const ast: Array<Token> = [];

  const _parser = (node: string, is_line_first: boolean) =>{
    // 空白が渡された場合
    if(!node){return []};

    let part_ast: Array<Token> = [{
      "type": "text",
      "value": node
    }];
    if(is_line_first){
      if(node.startsWith("#")){
        const part_string = node.split(" ");
        for (let i = 0; i < part_string[0].length; i++){
          if(part_string[0][i] != "#") return _parser(node, false);
        }
        part_ast = [{
          "type": "heading",
          "level": part_string[0].length,
          "children": [..._parser(node.slice(part_string[0].length + 1), false)]
        }];
      }else{
        part_ast = [{
          "type": "paragraph",
          "children": [..._parser(node, false)]
        }];
      }
    }else{
      const regex = /(\*\*)(.*?)\1/;
      const matched = node.match(regex);
      if(matched){
        part_ast = [
          ..._parser(node.slice(0, matched.index), false),
          {
            type: "strong",
            children: [
              ..._parser(matched[2], false)
            ]
          },
          ..._parser(node.slice((matched.index || 0) + matched[0].length), false)
        ];
      }
    }
    return part_ast;
  }

  // １行ごとに処理
  const lines = markdown.split("\n");
  lines.map((line)=>{
    // 空の場合は飛ばす
    if(!line) return;

    ast.push(..._parser(line, true));
  });

  // return ast;
  return ast;
}

export default parser;