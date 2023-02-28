let num = parseInt(prompt("Digite um número inteiro positivo:"));
if (isNaN(num) || num <= 0) {
  alert("Por favor, digite um número inteiro positivo válido!");
} else {
  let fatorial = 1;
  for (let i = 2; i <= num; i++) {
    fatorial *= i;
  }
  alert(num + "! = " + fatorial);
}