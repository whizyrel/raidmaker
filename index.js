const {encodePool} = require('./test/charList');

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
   * @param {String} no
   * @return {String} a String ID
   */
  generate(no) {
    return RAIDMaker.genID(no);
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
          Object.keys(encodePool)[(+[Math.floor(Math.random() *
          Object.keys(encodePool).length)]) + 1]
      );
    }
    console.log(container);
    return (container.join()).replace(new RegExp(',', 'gi'), '');
  }
}

module.exports = new RAIDMaker();
