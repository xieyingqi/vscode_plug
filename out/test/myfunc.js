"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Myclass {
    constructor() {
        this.bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    }
    static myfunc() {
        vscode.window.showInformationMessage("mymsg");
    }
    static myfunc2() {
    }
}
exports.Myclass = Myclass;
//# sourceMappingURL=myfunc.js.map