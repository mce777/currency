import { Converter } from '../src/currency';
import { assert } from 'chai';

describe('Testing the new and improved Currency Converter', () => {
	it('should convert correctly', () => {
		let ctest = new Converter('AUD');
		let ctestResult = ctest.convert(46);

		assert.equal(ctestResult, '30.5532', 'Did not convert correctly');
	});
	it('should convert back to original currency', () => {
		let cbtest = new Converter('USD');
		let cbtestResult = cbtest.convert(45);
		let convertBackResult = cbtest.convertBack(cbtestResult);

		assert.equal(convertBackResult, '45', 'Did not convert back correctly');
	});
});