let num = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(num) || num <= 0) {
  alert("Por favor, digite um número inteiro positivo válido!");
} else {
  let message = num + " é um número ";
  if (num % 2 === 0) {
    message += "par!";
  } else {
    message += "ímpar!";
  }
  alert(message);
}