import * as vscode from 'vscode';
import * as https from 'https';

export class Translate {
	private boxopt:vscode.InputBoxOptions;
	private bar:vscode.StatusBarItem;
	constructor() {
		this.boxopt = {
			placeHolder:"请输入要翻译的内容",
		},
		this.bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
		this.bar.text = "Translate";
		this.bar.tooltip = "翻译";
		this.bar.command = "translate";
		this.bar.show();
	}

	public showInputBox() {
		vscode.window.showInputBox(this.boxopt).then(function(msg)
		{
			
		});
	}

	public request()
	{
		
	}
}