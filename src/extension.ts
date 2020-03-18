import * as vscode from 'vscode';
import { Myclass } from './test/myfunc';

export function activate(context: vscode.ExtensionContext) {
	const myclass = new Myclass();
	context.subscriptions.push(vscode.commands.registerCommand("mycommand",()=>myclass.myfunc()));
	context.subscriptions.push(vscode.commands.registerCommand("mybarcom",()=>myclass.myfunc2()));
}
export function deactivate() {}
