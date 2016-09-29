import { rates } from './rates';

export interface ICurrency {
	curr: string;
}

export class Converter implements ICurrency {
	public curr: string;
	constructor(curToConvert: string) {
		this.curr = curToConvert;
	};
	public convert(amount: number): number {
		return rates.filter((e) => e.curName === this.curr)
			.map((e) => e.inBaseCur * amount)
			.reduce((v) => v)
	};
	public convertBack(amount: number): number {
		return rates.filter((e) => e.curName === this.curr)
			.map((e) => amount / e.inBaseCur)
			.reduce((v) => v)
	};
}

// const usdToEurConvert = new Converter('AUD');
// console.log(usdToEurConvert.convert(46));
// console.log(usdToEurConvert.convertBack(30.5532));
