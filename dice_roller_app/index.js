
urls = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Dice-2a-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c4/Dice-3a-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
]

function rollDice() {
  const numOfDice = Number(document.getElementById("numOfDice").value);
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src=${urls[value - 1]} alt="dice value ${value}">`);
  }

  const sumPoints = values.reduce((a, b) => a + b, 0);
  diceImages.innerHTML = images.join("") + `<br>Sum: ${sumPoints}`;
}