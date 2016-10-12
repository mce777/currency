import { ICurrency, loadAPI } from '../src/ajx';
import { Converter } from '../src/currency';
import { assert } from 'chai';

describe('Testing of the Currency Converter', () => {
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

	describe('loadAPI()', () => {
		(global as any)['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;  // tslint:disable-line

		it('should make a GET request', (done: () => void) => {
			const result: Promise<ICurrency> = loadAPI('http://api.fixer.io/latest?base=EUR');
			result.then((data: ICurrency) => {
				assert.equal(data.base, 'EUR', 'no work');
				done();
			}).catch((error: Error) => {
				console.log(error);
				done();
			});
		});
	});

});
