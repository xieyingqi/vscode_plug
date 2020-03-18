"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const myfunc_1 = require("./test/myfunc");
function activate(context) {
    const myclass = new myfunc_1.Myclass();
    context.subscriptions.push(vscode.commands.registerCommand("mycommand", () => myclass.myfunc()));
    context.subscriptions.push(vscode.commands.registerCommand("mybarcom", () => myclass.myfunc2()));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map