import * as vscode from 'vscode';
import { Translate } from './test/translate';

export function activate(context: vscode.ExtensionContext) {
	const translate = new Translate();
	context.subscriptions.push(vscode.commands.registerCommand("translate",()=>translate.showInputBox()));
}
export function deactivate() {}
