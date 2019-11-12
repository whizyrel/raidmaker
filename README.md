# raidmaker

It makes random strings per specified length. It can be used as id in database and apps supported by the environment.

## Requirement

- [Node](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/package/raidmaker)

## Installation

Use the package manager [npm](https://www.npmjs.com/package/raidmaker) to install raidmaker.

```bash
npm install raidmaker
```

## Usage

```js
const raidmaker = require('raidmaker'); // or
const { generate } = require('raidmaker');

console.log(generate(8, {no: 6}));
// [ 'AXaT6', 'V7xun', 'CPM2c', '2kvbg', 'c93ZQ', 'GdHcv' ]
```

## generate

Generate the strings given the length
  `length` <number> length of string returned. `default`: 5
  `options`
    `no` <number> of id element in the returned `Array`. `default`: 1, a `string` is returned
    `mode` <string> either of:
      - `apnr` || `alphanumeric` for alphanumeric
      - `figs` || `figures` for figures
      - `alpha` || `alphabets` for alphabets
      - `as` || `alphaspecial` for alphabets with special characters
      - `all` for all characters

```js
console.log(raidmaker.generate(5));

// WjMOs
```

## Project Status, Whats new?

- default length
- support for more than one elements

## Support, Suggestion, Bugs...
Visit the Github repository. Thanks
