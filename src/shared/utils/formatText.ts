export function formatText(data: string[], text: string) {
	let formatted = text;

	data.forEach((word) => {
		formatted = formatted.replace(
			word,
			`<span class="accent-word">${word}</span>`,
		);
	});

	return formatted;
}
