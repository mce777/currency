##About
The Currency Converter app takes an exchange rate, and when supplied with a valid amount of currency, converts this amount to **Euros**. Functionality also exists to convert the amount back to the original currency. 

##Setup
1. Clone the repository
2. To install the required dependencies, run the following on the command line: `npm install`
3. Prior to initial use, and after any changes have been made, run the following on the command line: `npm run build`

##Testing
The unit tests were written with the Mocha testing framework. To test the app, run the following command on the command line: `npm test`

##Tooling Information
* The source files were written in TypeScript
* The assertion library Chai was used to supplement Mocha
* The module bundler is Paeckchen: https://github.com/paeckchen/paeckchen






- Converter.ts
- Ajax.ts -> XMLHttpRequest, Promise, Tests -> Mocks ansehen
    - RateAPI.ts -> http://api.fixer.io/latest?symbols=USD,GBP
- EURConverter.ts