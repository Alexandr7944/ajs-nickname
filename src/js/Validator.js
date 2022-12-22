export default class Validator {
  static validateUsername(name) {
    const result = [true];
    if (!/^[a-z0-9-_]+$/gi.test(name)) {
      result[0] = false;
      result.push('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (!/^[a-z]/i.test(name)) {
      result[0] = false;
      result.push('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (!/[a-z]$/i.test(name)) {
      result[0] = false;
      result.push('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    if (/[0-9]{4}/.test(name)) {
      result[0] = false;
      result.push('Имя не должно содержать подряд более трёх цифр');
    }
    return result;
  }
}
