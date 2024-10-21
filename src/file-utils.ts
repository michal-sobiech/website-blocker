import * as fs from "fs";
import * as readline from "readline";


export async function readLinesFromFile(filePath: string): Promise<string[]> {
	const fileStream = fs.createReadStream(filePath);
	
	const lineReader = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	return await Array.fromAsync(lineReader);
}

export function readTextFile(filePath: string): string {
	return fs.readFileSync(filePath, "utf8");	
}
