// generic <T> used here, replaced with specific Interface later
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
				resolve(data);
			}

			if (xmlhttp.status && xmlhttp.status !== 200) {
				reject(xmlhttp.response);
			}
		};

		xmlhttp.open('GET', url, true);
		xmlhttp.send();

	});
}

export interface ICurrency {
	base: string;
	date: string;
	rates: {
		[key: string]: number;
	};
}

