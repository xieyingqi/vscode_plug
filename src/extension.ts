import * as vscode from 'vscode';
import { Myclass } from './test/myfunc';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand("mycommand",()=>Myclass.myfunc()));
}
export function deactivate() {}
