// import { baseCurName, rates } from './rates';

export interface ICurrency {
	rate: number;
}

export class Converter implements ICurrency {
	public rate: number;
	constructor(curRate: number) {
		this.rate = curRate;
	};
	public convert(amount: number): number {
		return (this.rate * amount);
	};
	public convertBack(amount: number): number {
		return (amount / this.rate);
	}
}

// const usdToEurConvert = new Converter(0.5);

// console.log(usdToEurConvert.convert(46));
// console.log(usdToEurConvert.convertBack(23));
