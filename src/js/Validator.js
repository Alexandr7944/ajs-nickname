export default class Validator {
  static validateUsername(name) {
    const result = { state: true, err: [] };
    if (!/^[a-z0-9-_]+$/gi.test(name)) {
      result.state = false;
      result.err.push('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (!/^[a-z]/i.test(name)) {
      result.state = false;
      result.err.push('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (!/[a-z]$/i.test(name)) {
      result.state = false;
      result.err.push('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    if (/[0-9]{4}/.test(name)) {
      result.state = false;
      result.err.push('Имя не должно содержать подряд более трёх цифр');
    }
    return result;
  }
}
