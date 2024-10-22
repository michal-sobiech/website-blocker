export function getParsedItem(key: string): any {
	const stringifiedItem = localStorage.getItem(key);
	if (stringifiedItem === null) return null;
	else return JSON.parse(stringifiedItem); 
}
