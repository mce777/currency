import { Converter } from '../src/currency';
import { assert } from 'chai';
import { loadAPI } from '../src/ajx';
import * as sinon from 'sinon';

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

	// describe('loadAPI()', () => {
	// 	it('should retrieve data from an API', () => {
	// 		const apiTest: Promise<any> = loadAPI('http://api.fixer.io/latest?base=EUR');
	// 		const apiTestResult: string = apiTest['base'];
	//
	// 		assert.equal(apiTestResult, 'EUR', 'Did not convert back correctly');
	// 	});
	//
	// });

	describe('loadAPI()', () => {
		let xhr: sinon.SinonFakeXMLHttpRequest, requests: sinon.SinonFakeXMLHttpRequest[];

		before(function () {
			xhr = sinon.useFakeXMLHttpRequest();
			requests = [];
			xhr.onCreate = function (req) { requests.push(req); };
		});

		after(function () {
			// Like before we must clean up when tampering with globals.
			xhr.restore();
		});

		// it('should retrieve data from an API', (done: () => void) => {
		// 	const result: Promise<any> = loadAPI('http://api.fixer.io/latest?base=EUR');
		// 	result.then((data: any) => {
		//
		// 		assert.equal(data['base'], 'EUR', 'Did not convert back correctly');
		// 		done();
		// 	});
		// });

		it('should make a GET request', (done: () => void) => {
			const result: Promise<any> = loadAPI('http://api.fixer.io/latest?base=EUR');
			result.then(() => {
				assert.equal(requests.length, 1);
				assert.equal(requests[0].url, 'http://api.fixer.io/latest?base=EUR');
				done();
			});
		});

	});

});
