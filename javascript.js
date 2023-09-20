var n = prompt('Digite um número inteiro: Que seja, par, positivo, maior que 0 e menor que 100:');

n !== parseInt(-n);

if (n>0 && n<100 && n%2==0){
    alert('O número atende aos critérios')

}else{
    alert('O número não atende aos critérios')
}

