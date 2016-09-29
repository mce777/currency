import { Converter } from '../src/currency2';
import { assert } from 'chai';

describe('Testing of the Currency Converter', () => {
	describe('convert() function', () => {
		it('should convert correctly', () => {
			const ctest = new Converter(0.6642);
			const ctestResult = ctest.convert(46);

			assert.equal(ctestResult, '30.5532', 'Did not convert correctly');
		});

		it('should not except values < 0', () => {
			let ctest = new Converter(0.6642);

			assert.throws(() => ctest.convert(-10), 'Negative values are not permitted');
		});
	});

	describe('convertBack() function', () => {
		it('should convert back to original currency', () => {
			let cbtest = new Converter(0.8903);
			let cbtestResult = cbtest.convert(45);
			let convertBackResult = cbtest.convertBack(cbtestResult);

			assert.equal(convertBackResult, '45', 'Did not convert back correctly');
		});

		it('should not except values < 0', () => {
			let cbtest = new Converter(0.8903);

			assert.throws(() => cbtest.convertBack(-10), 'Negative values are not permitted');
		});
	});
});
