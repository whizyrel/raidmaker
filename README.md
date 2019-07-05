# raidmaker https://img.shields.io/badge/status-stable-green.svg https://img.shields.io/badge/version-1.3.2-green.svg

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
```

## generate

Generate the strings given the length

```js
const length = 5;
raidmaker.generate(length); // returns the a string of the length specified
```

## Fixes

- last element being undefined since the previous version before this

# Project Status

I sincerely apologize for the troubles and I'm glad to announce that this version is now stable and functional. I really do not have time to write readmes but support and contributions are welcome.

#Support
Visit the Github repository for
