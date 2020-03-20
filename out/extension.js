"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const translate_1 = require("./test/translate");
function activate(context) {
    const translate = new translate_1.Translate();
    context.subscriptions.push(vscode.commands.registerCommand("translate", () => translate.showInputBox()));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map