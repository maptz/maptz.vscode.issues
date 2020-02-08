import * as vscode from 'vscode';

export class MyFoldingRangeProvider implements vscode.FoldingRangeProvider {

constructor() { }

provideFoldingRanges(
    document: vscode.TextDocument,
    context: vscode.FoldingContext,
    token: vscode.CancellationToken
  ): vscode.FoldingRange[] {
    const languageId = document.languageId;
    var completedRegions: vscode.FoldingRange[] = [];
	completedRegions.push(new vscode.FoldingRange(3,5, vscode.FoldingRangeKind.Region));
	return completedRegions;
  }
}

function registerFoldingRangeProvider() {
	const foldingRangeProvider = new MyFoldingRangeProvider();
	vscode.languages.registerFoldingRangeProvider(
	  ["cpp"],
	  foldingRangeProvider
	);
	return foldingRangeProvider;
  }

const foldingRangeProvider = registerFoldingRangeProvider();

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "maptz-vscode-issue-foldingrangeprovider" is now active!');

    context.subscriptions.push(
      vscode.workspace.onDidOpenTextDocument(e => {
		const foldingRangeProvider = registerFoldingRangeProvider();
    }));

}

export function deactivate() {}
