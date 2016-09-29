// import { baseCurName, rates } from './rates';

export interface ICurrency {
	convert(amountToConvert: number): number;
	convertBack(amountToConvert: number): number;
}

export class Converter implements ICurrency {
	protected rate: number;
	constructor(currencyRate: number) {
		this.rate = currencyRate;
	};
	public convert(amountToConvert: number): number {
		if (amountToConvert < 0) {
			throw new Error('Negative values are not permitted');
		}
		return (this.rate * amountToConvert);
	};
	public convertBack(amountToConvert: number): number {
		if (amountToConvert < 0) {
			throw new Error('Negative values are not permitted');
		}
		return (amountToConvert / this.rate);
	}
}
