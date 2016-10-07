// export function loadAPI(url: string, callback: any): any {
// 	let xmlhttp = new XMLHttpRequest();
// 	xmlhttp.onreadystatechange = () => {
// 		let data = JSON.parse(xmlhttp.responseText);
// 		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
// 			try {
// 				callback(data);
// 			} catch (err) {
// 				console.log(err.message + ' in ' + xmlhttp.responseText);
// 				return;
// 			}
// 		}
// 	};
// 	xmlhttp.open('GET', url, true);
// 	xmlhttp.send();
// }

export function loadAPI(url: string) {
	return new Promise<any>((resolve, reject) => {
		let xmlhttp: XMLHttpRequest;

		try {
			xmlhttp = new XMLHttpRequest();
		} catch (exception) {
			reject(exception);
		}

		xmlhttp.onreadystatechange = () => {
			const data = JSON.parse(xmlhttp.responseText);
			resolve(data);
		};

		xmlhttp.onerror = () => {
			const message = 'no can haz';
			reject(new Error(message));
		};

		xmlhttp.open('GET', url, true);
		xmlhttp.send();

	})
}
const apiTest = loadAPI('http://api.fixer.io/latest?base=EUR');
apiTest.then((data: any) => {
	console.log(data['base'])
})




