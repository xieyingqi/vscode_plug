"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Translate {
    constructor() {
        this.boxopt = {
            placeHolder: "请输入",
        },
            this.bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
        this.bar.text = "点";
        this.bar.tooltip = "a";
        this.bar.command = "translate";
        this.bar.show();
    }
    showInputBox() {
        vscode.window.showInputBox(this.boxopt).then(function (msg) {
            console.log("用户输入：" + msg);
        });
    }
}
exports.Translate = Translate;
//# sourceMappingURL=translat.js.map