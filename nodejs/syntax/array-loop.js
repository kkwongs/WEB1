var number = [1, 400, 12, 34];
var i = 0;
total = 0;
while (i < number.length) {
  total += number[i];
  i = i + 1;
}
console.log(`total: ${total}`);