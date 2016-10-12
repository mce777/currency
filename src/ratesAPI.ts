import { ICurrency, loadAPI } from './ajx';

const baseCurrency: string = 'EUR';

const ratesAPI = loadAPI('http://api.fixer.io/latest?base=' + baseCurrency);
ratesAPI.then((data: ICurrency) => {
	document.getElementById('demo2').innerHTML = '<h4>' + data.rates['USD'] + '</h4>';

	document.getElementById('demo3').innerHTML = '<h2>' + data.base + '</h2>';

});

// const apiTest = loadAPI<ICurrency>('http://api.fixer.io/latest?base=EUR');
// apiTest.then((data: ICurrency) => {
// 	console.log(data.base);
// 	console.log(data.rates['AUD']);
// });