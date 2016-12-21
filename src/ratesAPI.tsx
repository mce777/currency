import { loadAPI } from './ajx';
import { ICurrency } from './interfaces';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from 'currstyles/lib/components/atoms/button/Button';
// import style from 'currstyles/lib/components/organisms/AppDemo/AppDemo';
import style from './css/appstyle.css';
import Header from 'currstyles/lib/components/atoms/header/Header';
import InputDropDown from 'currstyles/lib/components/molecules/input_dropdown/InputDropdown';
import Message from 'currstyles/lib/components/atoms/message/Message';
import AppDate from 'currstyles/lib/components/atoms/date/AppDate';

const baseCurrency = 'EUR';

const ratesAPI = loadAPI<ICurrency>('http://api.fixer.io/latest?base=' + baseCurrency);
ratesAPI.then((data: ICurrency) => {

	ReactDOM.render(
		(
			<div>
				<Header>Currency Converter</Header>
				<div className={style.input1}>
					<InputDropDown
						id="id1"
						labelName="Base Currency"
						inputName="Base Currency"
						name="whatever"
						type="text"
						placeholder="e.g. 123"
						options={ [{name: 'item1', value: 'value1'}, {name: 'item2', value: 'value2'}] }
						handleInputChange={() => {console.log('onInputChange/appDemo being logged here');}}
						handleDropdownChange={() => {alert('why you change once?');}}
					/>
				</div>
				<div className={style.input1}>
					<InputDropDown
						id="id2"
						labelName="Target Currency"
						inputName="Target Currency"
						name="whatever2"
						type="text"
						options={ [{name: 'item1', value: 'value1'}, {name: 'item2', value: 'value2'}]}
						disabled
						handleInputChange={() => {console.log('onInputChange/appDemo being logged here again');}}
						handleDropdownChange={() => {alert('why you change twice?');}}
					/>
				</div>
				<Message>1 base currency = 2 in other currency</Message>
				<div className={style.btnStyle}>
					<Button title="submit btn" handleClick= {() => {alert('handle click event');}} value="Convert" />
				</div>
				<AppDate text="Data from " time="31.12.2016"/>
			</div>
		),
		document.getElementById('container')
	);

});

//
// const ratesAPI = loadAPI<ICurrency>('http://api.fixer.io/latest?base=' + baseCurrency);
// ratesAPI.then((data: ICurrency) => {
//
// 	ReactDOM.render(
// 		(
// 			<div>
// 				<Button type="button" value="My Big Button" handleClick={() => alert("button was pressed")}/>
// 			</div>
// 		),
// 		document.getElementById('container')
// 	);
//
// });

