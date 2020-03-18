import * as vscode from 'vscode';

export class Myclass {
	private boxopt:vscode.InputBoxOptions;
	constructor() {
		this.boxopt = {
			placeHolder:"请输入",
			validateInput:function(text){return text;},
		};
	}

	public myfunc() {
		vscode.window.showInformationMessage("mymsg");
	}

	public myfunc2() {
		vscode.window.showInputBox(this.boxopt).then(function(msg)
		{
			console.log("用户输入："+msg);
		});
	}
}