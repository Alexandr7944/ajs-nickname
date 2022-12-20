export default class Validator {
  constructor(name) {
    if (this.validateUsername(name)) {
      this.name = name;
    } else {
      throw new Error('Имя пользователя может содежржать только латинские буквы, символы тире, подчёркивания и цифры не более 3 подряд');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  validateUsername(name) {
    let result = false;
    const valid = /^[a-z][a-z0-9-_]+[a-z]$/gi;
    const numberValidation = /[0-9]{4}/;
    if (valid.test(name) && !numberValidation.test(name)) {
      result = true;
    }
    return result;
  }
}
