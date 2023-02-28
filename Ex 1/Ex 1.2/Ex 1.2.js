let num = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(num) || num <= 0) {
  alert("Por favor, digite um número inteiro positivo válido!");
} else {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(num + " é um número primo!");
  } else {
    alert(num + " não é um número primo!");
  }
}