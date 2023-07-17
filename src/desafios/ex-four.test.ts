import {checkIfTheFirstLetterIsUppercase} from './ex-four';

test('First letter is uppercase - "Brasil"', () => {
  expect(checkIfTheFirstLetterIsUppercase('Brasil')).toBe(true);
});

test('First letter is not uppercase - "mobiauto"', () => {
  expect(checkIfTheFirstLetterIsUppercase('mobiauto')).toBe(false);
});

test('First letter is not uppercase - "xXx xXx"', () => {
  expect(checkIfTheFirstLetterIsUppercase('xXx xXx')).toBe(false);
});

test('First letter is not uppercase - "xDD"', () => {
  expect(checkIfTheFirstLetterIsUppercase('xDD')).toBe(false);
});

test('First letter is uppercase - "Deu Certo!"', () => {
  expect(checkIfTheFirstLetterIsUppercase('Deu Certo!')).toBe(true);
});
