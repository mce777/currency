import { loadAPI } from '../src/ajx';
import { ICurrency } from '../src/interfaces';
import { assert } from 'chai';

(global as any)['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;  // tslint:disable-line

describe('Testing the API', () => {
	describe('loadAPI()', () => {

		it('should make a GET request', (done: () => void) => {
			const result: Promise<ICurrency> = loadAPI<ICurrency>('http://api.fixer.io/latest?base=EUR');
			result.then((data: ICurrency) => {
				assert.equal(data.base, 'EUR', 'no work');
				done();
			}).catch((error: Error) => {
				console.log(error);
				done();
			});
		});
	});

	describe('loadAPI() with bad URL', () => {

		it('should reject', (done: () => void) => {
			const result: Promise<ICurrency> = loadAPI<ICurrency>('thisShouldDefininatelyNotWorkSchwupp');
			result.catch((error: Error) => {
				assert.isNotNull(error);
				done();
			});
		});
	});

});
