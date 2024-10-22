console.log("Background script loaded!");


async function main(): Promise<void> {
	while(true) {
		console.log("Background script here!");
		await new Promise(resolve => setTimeout(resolve, 1000));		
	}
}


main();
