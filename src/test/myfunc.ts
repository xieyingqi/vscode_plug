import * as vscode from 'vscode';

export class Myclass {
	private bar:vscode.StatusBarItem;
	constructor() {
		this.bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	}

	public static myfunc()
	{
		vscode.window.showInformationMessage("mymsg");
	}

	public static myfunc2()
	{
		
	}
}