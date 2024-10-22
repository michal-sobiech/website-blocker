export async function getItem(key: string): Promise<any> {
	return (await browser.storage.local.get(key))[key];
}
