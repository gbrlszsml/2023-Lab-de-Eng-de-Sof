let dado = prompt("Digite um dado:");
let confirmacao = confirm("Deseja verificar o tipo do dado informado?");
    if (confirmacao) 
    {
        document.write(`O tipo do dado informado é: ${typeof dado}`);
    }
 else {
    document.write("Obrigado por visitar esta página");
}