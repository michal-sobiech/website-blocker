export function setupDomBlockade(htmlCode: string): void {
	document.documentElement.innerHTML = htmlCode;
}
