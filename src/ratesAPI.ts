import { loadAPI } from './ajx';
import { ICurrency } from './interfaces';

const baseCurrency = 'EUR';

const ratesAPI = loadAPI<ICurrency>('http://api.fixer.io/latest?base=' + baseCurrency);
ratesAPI.then((data: ICurrency) => {
	document.getElementById('demo2').innerHTML = '<h4>' + data.rates['USD'] + '</h4>';

	document.getElementById('demo3').innerHTML = '<h2>' + data.base + '</h2>';
});

