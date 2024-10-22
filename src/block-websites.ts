import { isUrlBlocked } from "./url-utils";
import { setupDomBlockade } from "./dom-utils";
import { getParsedItem as getFromLocalStorage } from "./local-storage-utils";
import { blockedUrlsLocalStorageKey, blockadeHtmlCode } from "./variables";


async function main(): Promise<void> {
	const blockedUrls = getFromLocalStorage(blockedUrlsLocalStorageKey);

	if (isUrlBlocked(document.URL, blockedUrls)) {
		setupDomBlockade(blockadeHtmlCode);
		console.log("ACCESS DENIED!");
	}
	else {
		console.log("Access granted!");
	}
}

main();
