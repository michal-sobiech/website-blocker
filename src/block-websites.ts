import { isUrlBlocked } from "./url-utils";
import { setupDomBlockade } from "./dom-utils";
import { getItem as getFromBrowserStorage } from "./browser-storage-utils";
import { blockedUrlsStorageKey, blockadeHtmlCode } from "./variables";


window.addEventListener('load', () => main());

async function main(): Promise<void> {
	console.log("Loaded!");
	//while (true) {
		//await new Promise(resolve => setTimeout(resolve, 1000));
		//console.log("test");
	//	await new Promise(resolve => setTimeout(resolve, 0));
	//}
	
	const blockedUrls = await getFromBrowserStorage(blockedUrlsStorageKey);

	if (blockedUrls && isUrlBlocked(document.URL, blockedUrls)) {
		setupDomBlockade(blockadeHtmlCode);
		console.log("ACCESS DENIED!");
	}
	else {
		console.log("Access granted!");
	}
}

main();

