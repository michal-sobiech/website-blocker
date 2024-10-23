import { isUrlBlocked } from "./url-utils";
import { setupDomBlockade } from "./dom-utils";
import { getItem as getFromBrowserStorage } from "./browser-storage-utils";
import { blockedUrlsStorageKey, blockadeHtmlCode, pollingPeriodMs } from "./variables";


window.addEventListener('load', () => main());

const previousUrl: string = "";
async function checkUrl(): Promise<void> {
	if (document.URL !== previousUrl) {			
		const blockedUrls = await getFromBrowserStorage(blockedUrlsStorageKey);

		if (blockedUrls && isUrlBlocked(document.URL, blockedUrls)) {
			setupDomBlockade(blockadeHtmlCode);
			console.log("ACCESS DENIED!");
		}
		else {
			console.log("Access granted!");
		}
	}
}

async function main(): Promise<void> {
	console.log("Loaded!");
	setInterval(checkUrl, pollingPeriodMs);
}

main();

