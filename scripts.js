var a = 4,
   b = 6,
   value = (a * b) - (2 * a * b) + (b * b);
console.log(value);

if (value > 0) {
   console.log('wynik jest dodatni');
} else {
   console.log('wynik jest ujemny');
}

var wynik = value === 0 ? 'jest rówwne zero' : 'nie jest równe zero';
console.log(wynik);
