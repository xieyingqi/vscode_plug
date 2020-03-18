"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const myfunc_1 = require("./test/myfunc");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("mycommand", () => myfunc_1.Myclass.myfunc()));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map