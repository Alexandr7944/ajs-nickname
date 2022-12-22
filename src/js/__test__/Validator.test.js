import Validator from '../Validator';

test('Validator test valid name', () => {
  const result = Validator.validateUsername('user-one_123_pro');
  expect(result).toEqual([true]);
});

test('Validator test general validation', () => {
  const result = Validator.validateUsername('user-one_*123_pro');
  expect(result).toEqual([false, 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)']);
});

test('Validator test beginning of name', () => {
  const result = Validator.validateUsername('1user-one_123_pro');
  expect(result).toEqual([false, 'Имя не должно начинаться цифрами, символами подчёркивания или тире']);
});

test('Validator test end of name', () => {
  const result = Validator.validateUsername('user-one_123_pro6');
  expect(result).toEqual([false, 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире']);
});

test('Validator test numberValidation', () => {
  const result = Validator.validateUsername('user-one_1234_pro');
  expect(result).toEqual([false, 'Имя не должно содержать подряд более трёх цифр']);
});

test('Validator test invalid name', () => {
  const result = Validator.validateUsername('user-one_1234_pro!');
  expect(result).toEqual([
    false,
    'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)',
    'Имя не должно заканчиваться цифрами, символами подчёркивания или тире',
    'Имя не должно содержать подряд более трёх цифр',
  ]);
});
