"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManager = void 0;
const CreateManager_1 = __importDefault(require("./CreateManager"));
function createManager(req, res) {
    CreateManager_1.default.execute("Ermesson", "cpf", "ermesson@hotmail.com", "phone");
}
exports.createManager = createManager;
