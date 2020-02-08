"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class MyFoldingRangeProvider {
    constructor() { }
    provideFoldingRanges(document, context, token) {
        const languageId = document.languageId;
        var completedRegions = [];
        completedRegions.push(new vscode.FoldingRange(3, 5, vscode.FoldingRangeKind.Region));
        return completedRegions;
    }
}
exports.MyFoldingRangeProvider = MyFoldingRangeProvider;
function registerFoldingRangeProvider() {
    const foldingRangeProvider = new MyFoldingRangeProvider();
    vscode.languages.registerFoldingRangeProvider(["cpp"], foldingRangeProvider);
    return foldingRangeProvider;
}
const foldingRangeProvider = registerFoldingRangeProvider();
function activate(context) {
    console.log('Congratulations, your extension "maptz-vscode-issue-foldingrangeprovider" is now active!');
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(e => {
        const foldingRangeProvider = registerFoldingRangeProvider();
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map