"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPost = void 0;
const RegisterPost_1 = __importDefault(require("./RegisterPost"));
function registerPost(req, res) {
    RegisterPost_1.default.execute("Ermesson", "ermesson@hotmail.com", "active");
}
exports.registerPost = registerPost;
