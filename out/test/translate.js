"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Translate {
    constructor() {
        this.boxopt = {
            placeHolder: "请输入要翻译的内容",
        },
            this.bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
        this.bar.text = "Translate";
        this.bar.tooltip = "翻译";
        this.bar.command = "translate";
        this.bar.show();
    }
    showInputBox() {
        vscode.window.showInputBox(this.boxopt).then(function (msg) {
        });
    }
}
exports.Translate = Translate;
//# sourceMappingURL=translate.js.map