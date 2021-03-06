import { Converter } from '../src/currency';
import { assert } from 'chai';

describe('Testing the Converter', () => {
	describe('convert()', () => {
		it('should convert correctly', () => {
			const ctest = new Converter(0.6642);
			const ctestResult = ctest.convert(46);

			assert.strictEqual(ctestResult, 30.5532, 'Did not convert correctly');
		});

		it('should not except values < 0', () => {
			const ctest = new Converter(0.6642);

			assert.throws(() => ctest.convert(-10), 'Negative values are not permitted');
		});
	});

	describe('convertBack()', () => {
		it('should convert back to original currency', () => {
			const cbtest = new Converter(0.8903);
			const cbtestResult = cbtest.convert(45);
			const convertBackResult = cbtest.convertBack(cbtestResult);

			assert.strictEqual(convertBackResult, 45, 'Did not convert back correctly');
		});

		it('should not except values < 0', () => {
			const cbtest = new Converter(0.8903);

			assert.throws(() => cbtest.convertBack(-10), 'Negative values are not permitted');
		});
	});

});
