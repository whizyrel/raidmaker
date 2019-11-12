const {
  upperCasePool, lowerCasePool,
  specialCharPool, numberCharPool,
} = require('./char-list');

module.exports = Object.freeze({
  apnr: [
    ...lowerCasePool, ...upperCasePool, ...numberCharPool,
  ],
  alphanumeric: [
    ...lowerCasePool, ...upperCasePool, ...numberCharPool,
  ],
  figs: [...numberCharPool],
  figures: [...numberCharPool],
  alphas: [...lowerCasePool, ...upperCasePool],
  alpha: [...lowerCasePool, ...upperCasePool],
  as: [
    ...lowerCasePool, ...upperCasePool, ...specialCharPool,
  ],
  alphaspecial: [
    ...lowerCasePool, ...upperCasePool, ...specialCharPool,
  ],
  all: [
    ...lowerCasePool, ...upperCasePool,
    ...specialCharPool, ...numberCharPool,
  ],
});
