//Function used to help find the text for intl.
//Helps by allowing to use the prefixes (nested prefixes & keys)
export function flattenMessages(nestedMessages, prefix = "") {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		let value = nestedMessages[key];
		let prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === "string") {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey));
		}

		return messages;
	}, {});
}
