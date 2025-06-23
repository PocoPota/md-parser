import { Token } from "./modules/token";

const parser = (markdown: string) => {
  const ast: Array<Token> = [];

  const _parser = (node: string) =>{
    // 空の場合は飛ばす
    if(!node) return;
  }

  // １行ごとに処理
  const lines = markdown.split("\n");
  lines.map((line)=>{
    _parser(line);
  });

  return ast;
}

export default parser;