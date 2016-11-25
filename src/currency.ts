import { IConverter } from './interfaces';

export class Converter implements IConverter {
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
