function isEven(num) {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(10));
console.log(isEven(7));

function isValidEmail(email){
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Bro@fake.com"));