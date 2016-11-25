const path = require('path');
module.exports = {
	title: 'My Great Style Guide',
	components: './components/**/*.js',
	sections: [
		{ name: 'Introduction', content: './docs/introduction.md' }
		// { name: 'UI Components', content: './docs/ui.md', components: 'lib/components/ui/*.js' },
	]
};