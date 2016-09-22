import { Converter } from '../src/currency';
import { assert } from 'chai';

describe('Testing the new and improved Currency Converter', () => {
	it('should convert correctly', () => {
		let ctest = new Converter(0.6642);
		let ctestResult = ctest.convert(45);

		assert.equal(ctestResult, '29.889', 'Did not convert correctly');
	});
	it('should convert back to original currency', () => {
		let cbtest = new Converter(0.8903);
		let cbtestResult = cbtest.convert(45);
		let convertBackResult = cbtest.convertBack(cbtestResult);

		assert.equal(convertBackResult, '45', 'Did not convert back correctly');
	});
});