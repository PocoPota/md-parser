"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseMarkdown;
const parser_1 = __importDefault(require("./src/parser"));
const generator_1 = __importDefault(require("./src/generator"));
function parseMarkdown(markdown) {
    const ast = (0, parser_1.default)(markdown);
    const html = (0, generator_1.default)(ast);
    return html;
}
