export const Util = function () {}

Util.prototype = {
  /*
  * Фильтрация ввода - только цифры
  * */
  integerInput (val) {
    return String(val).match(/\d*/)[0]
  },
  /*
  * Фильтрация ввода - натуральные и вещественные числа
  * */
  floatInput (val) {
    return String(val).match(/\d*\.\d*/g) || this.integerInput(val)
  }
}
Object.defineProperty(Util.prototype, 'constructor', {
  value: Util,
  enumerable: false
})
