export function isUrlBlocked(url: string, blockedUrlPatterns: string[]): boolean {
	for (const pattern of blockedUrlPatterns) {
		const regex = new RegExp(pattern);
		if (regex.test(url)) return true;
	}
	return false;
}

