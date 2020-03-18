"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Myclass {
    constructor() {
        this.boxopt = {
            placeHolder: "请输入",
            validateInput: function (text) { return text; },
        };
    }
    myfunc() {
        vscode.window.showInformationMessage("mymsg");
    }
    myfunc2() {
        vscode.window.showInputBox(this.boxopt).then(function (msg) {
            console.log("用户输入：" + msg);
        });
    }
}
exports.Myclass = Myclass;
//# sourceMappingURL=myfunc.js.map