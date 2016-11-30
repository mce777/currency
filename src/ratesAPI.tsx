import { loadAPI } from './ajx';
import { ICurrency } from './interfaces';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from 'currstyles/dist/lib/components/atoms/button/Button.js';

const baseCurrency = 'EUR';

const ratesAPI = loadAPI<ICurrency>('http://api.fixer.io/latest?base=' + baseCurrency);
ratesAPI.then((data: ICurrency) => {

	ReactDOM.render(
		(
			<div>
				<Button type="button" value="My Button" handleClick={() => alert("button was pressed")}/>
			</div>
		),
		document.getElementById('container')
	);

});
