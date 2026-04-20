async function scheduling(): Promise<never> {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error("It turns out I can't make it after all."));
		}, 60 * 60 * 1000);
	});
}

async function onInvitationReceived(): Promise<boolean> {
	console.log("I'll try to make it.");
	try {
		await scheduling();
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
