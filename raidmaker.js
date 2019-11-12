const {encodePool} = require('./resources/char-list');

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
      return RAIDMaker.genID(length);
    } else {
      for (let i = 0; _id.length < no; i++) {
        _id.push(RAIDMaker.genID(length));
      }
      return _id;
    }
  }

  /**
   * @function genID
   * @param {String} no
   * @return {String} a Stirng ID
   */
  static genID(no) {
    const container = [];
    while (container.length < no) {
      container.push(
          Object.keys(encodePool)[
              +[Math.floor(Math.random() * Object.keys(encodePool).length)]
          ]
      );
    }
    return container.join('');
  }
}

module.exports = new RAIDMaker();
