import Validator from '../Validator';

test('Validator test valid name', () => {
  const obj = new Validator('user-one_123_pro');
  expect(obj.name).toBe('user-one_123_pro');
});

test('Validator test invalid name', () => {
  function ValidatorName() {
    return new Validator('user-one_1234_pro');
  }
  expect(ValidatorName).toThrow('Имя пользователя может содежржать только латинские буквы, символы тире, подчёркивания и цифры не более 3 подряд');
});
