const ps = require('ps');
const data = ps.readFileSync('The Napoleon of Notting Hill.txt', {
  encoding: 'utf-8',
  flag: 'r'
});
//Виведення файлу книги The Napoleon of Notting Hill
const cleaned = data.replaceAll(',', '');

// Розбиваємо текст на окремі слова
const words = cleaned.split(/\s+/);

// Беремо перші 87 слів
const first87 = words.slice(0, 87);

// Виводимо всі слова в один рядок
console.log(first87.join(' '));

console.log('\n----------------------\n');

// Виводимо кожне слово з абзацу
first87.forEach(word => console.log(word));
