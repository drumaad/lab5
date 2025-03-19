// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let letters = [];

  // Записуємо лише букви у масив
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= '0' && str[i] <= '9')) {
      letters.push(str[i]);
    }
  }

  // Створюємо новий рядок, додаючи символи у зворотному порядку
  let reversedStr = '';
  for (let i = letters.length - 1; i >= 0; i--) {
    reversedStr += letters[i];
  }

  return reversedStr;
}

console.log(reverseWithoutNumbers("abc123def")); // "fedcba"
console.log(reverseWithoutNumbers("hello5world")); // "dlrowolleh"
console.log(reverseWithoutNumbers("123")); // ""
console.log(reverseWithoutNumbers("abcdef")); // "fedcba"

module.exports = reverseWithoutNumbers;