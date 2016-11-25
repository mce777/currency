// TypeScript generic <T> used here, replaced with specific Interface later
export function loadAPI<T>(url: string): Promise<T> {
	return new Promise<T>((resolve: (data: T) => void, reject: (data: string) => void) => {
		let xmlhttp: XMLHttpRequest;

		try {
			xmlhttp = new XMLHttpRequest();
		} catch (exception) {
			reject(exception);
		}

		xmlhttp.onreadystatechange = () => {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				const data: T = JSON.parse(xmlhttp.responseText);
				return resolve(data);
			}

			if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
				return reject(`${xmlhttp}`);
			}
		};

		xmlhttp.open('GET', url, true);
		xmlhttp.send();

	});
}
