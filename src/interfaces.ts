export interface ICurrency {
	base: string;
	date: string;
	rates: {
		[key: string]: number;
	};
}

export interface IConverter {
	convert(amountToConvert: number): number;
	convertBack(amountToConvert: number): number;
}
