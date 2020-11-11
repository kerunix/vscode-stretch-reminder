import { setInterval } from 'timers';
import * as vscode from 'vscode';

const configuration = vscode.workspace.getConfiguration();
const INTERVAL_BETWEEN_STRETCH = getFormatedConfig('stretchReminder.intervalBetweenStretch');
const SNOOZE = getFormatedConfig('stretchReminder.snooze');

let myStatusBarItem: vscode.StatusBarItem;
let timer: NodeJS.Timeout;
let remainingTime = INTERVAL_BETWEEN_STRETCH;

export function activate() {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	timer = setInterval(handleTick, 1000);
	myStatusBarItem.show();
}

export function deactivate() {
	if(timer) {
		clearInterval(timer);
	}
}

function handleTick(): void {
	if(remainingTime! > 0) {
		updateStatusBarItem(remainingTime!);
		remainingTime! -= 1;
	} else {
		clearInterval(timer);
		vscode.window.showInformationMessage(
			'Hey there fellow developer, take some time to stretch a bit if you can. Health is important too you know ;)',
			{ modal: true },
			{ title: `Add ${configuration.get('stretchReminder.intervalBetweenStretch')} minutes` },
			{ title: 'Restart timer', isCloseAffordance: true }
		)
		.then(selectedOption => {
			if(selectedOption === undefined || selectedOption.title === 'Restart timer') {
				restartTimer(INTERVAL_BETWEEN_STRETCH);
			} else {
				restartTimer(SNOOZE);
			}
		});
	}
}

function restartTimer(duration: number): void {
	remainingTime = duration;
	timer = setInterval(handleTick, 1000);
}

function updateStatusBarItem(remainingTime: number): void {
	var min = Math.floor(remainingTime / 60);
	var sec = (remainingTime - (min * 60)).toString();

	if (parseInt(sec) < 10) {
		sec = `0${sec}`;
	}

	var message = `${min.toString()}:${sec}`;
	myStatusBarItem.text = message;
}

function getFormatedConfig(key: string): number {
	return configuration.get(key) as number * 60;
}