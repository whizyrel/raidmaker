const {encodePool} = require('./resources/char-list');
const shortcodes = require('./resources/short-codes');

/**
 * @class
 * @name RAIDMaker
 * @type {Class}
 * @function generate
 * @function genID
 */
class RAIDMaker {
  /**
   * generates random numbers specified
   * @function generate
   * @param {Number} length
   * @param {options} options
   * @return {String | Array} String | Array
   */
  generate(
      length = 5,
      {no = 1, mode = 'alphanumeric'} = {}
  ) {
    const _id = [];
    if (no === 1) {
      return RAIDMaker.genID(length, mode);
    } else {
      for (let i = 0; _id.length < no; i++) {
        _id.push(RAIDMaker.genID(length, mode));
      }
      return _id;
    }
  }

  /**
   * @function genID
   * @param {Number} length
   * @param {String} _mode
   * @return {String} id
   */
  static genID(length, _mode = null) {
    const container = [];
    while (container.length < length) {
      container.push(
        _mode !== null ?
          shortcodes[_mode][
              +[Math.floor(Math.random() * shortcodes[_mode].length)]
          ] :
          Object.keys(encodePool)[
              +[Math.floor(Math.random() * Object.keys(encodePool).length)]
          ]
      );
    }
    return container.join('');
  }
}

module.exports = Object.freeze(new RAIDMaker());
