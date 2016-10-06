import { baseCurName } from './rates';
import { loadAPI } from './ajx';

loadAPI('http://api.fixer.io/latest?base=' + baseCurName, (data: string) => {
	document.getElementById('demo2').innerHTML = data['rates']['USD'];

	let html = '<h2>' + data['base'] + '</h2>';

	document.getElementById('demo3').innerHTML = html;

});