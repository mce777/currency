import { loadAPI } from './ajx';
import { ICurrency } from './interfaces';

const baseCurrency = 'EUR';

const ratesAPI = loadAPI<ICurrency>('http://api.fixer.io/latest?base=' + baseCurrency);
ratesAPI.then((data: ICurrency) => {
	document.getElementById('container').innerHTML = '<h4>' + data.rates['USD'] + '</h4>';
});
