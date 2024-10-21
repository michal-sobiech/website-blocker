import { readLinesFromFile, readTextFile } from "./file-utils";
import { isUrlBlocked } from "./url-utils";
import { setupDomBlockade } from "./dom-utils";


const blockedUrlPatternsFile = "blocked_url_patterns.txt";
const blockadeHtmlCodeFile = "blockade_screen.html";

const blockedUrlPatterns = await readLinesFromFile(blockedUrlPatternsFile);
const blockadeHtmlCode = readTextFile(blockadeHtmlCodeFile);

if (isUrlBlocked(document.URL, blockedUrlPatterns)) {
   	setupDomBlockade(blockadeHtmlCode);
}
