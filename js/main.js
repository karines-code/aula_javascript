function clicar(){
    document.getElementById('agradecimento').innerHTML='<b>obrigado</b> por clicar';
}
function redirecionar(){
    window.open('http:\\www.g1.globo.com'); // em outra aba
    //window.location.href='http:\\www.globo.com'; //na mesma página
}
function trocar(){
    //alert('trocar texto');
    document.getElementById('mousee').innerHTML='obrigado por passar o <b>mouse</b>';
}
function voltar(elemento){
    //alert('trocar texto');
    elemento.innerHTML='Passe o mouse aqui'; //utilizar o this faz com que a função possa ser utilizada em qualquer elemento do html
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
AULA 7 - FUNÇÕES

function soma(n1,n2){
    return n1+n2;
}

alert(soma(2,5));

AULA 6 - UTILIZANDO DATA

var d = new Date();
alert("data completa "+ d);
alert("data "+ d.getDate());
alert('Mês '+ (d.getMonth()+1));//ele começa contar de 0
alert("dia da semana" +d.getDay());
alert("Hora "+d.getHours());
alert("Minutos "+d.getMinutes());

AULA 5 - ESTRUTURAS DE REPETIÇÃO

//WHILE
var count = 0;
while(count <=5){
    console.log(count);
    count++;
};

//FOR
var count;
for(count=0; count <= 10 ; count++){
    console.log(count);
}


AULA 4 - CONDICIONAIS

var idade = prompt('Qual a sua idade?');
if(idade>=18){
    alert('maior de idade');
}else{
    alert('menor de idade');
}

AULA 3 - DICIONÁRIOS

var fruta = {nome: 'maçã', cor: 'vermelha'};
console.log(fruta);
console.log(fruta.nome)
var frutas = [{nome: 'maçã', cor: 'vermelha'},{nome: 'uva', cor: 'roxa'}];
console.log(frutas);
console.log(frutas[1].nome);

AULA 2 - LISTAS

var lista = ['maçã', 'pêra', 'laranja'];
console.log(lista);
console.log(lista[1]);
lista.push('uva'); //insere um elemento
console.log(lista);
lista.pop(); //retira o último elemento
console.log(lista);
console.log(lista.length); //ver tamanho da lista
console.log(lista.reverse()); //inverte ordem dos elementos
console.log(lista.toString()); //transforma a lista em string
console.log(lista.join(' - ')); //transforma em string mas pode-se escolher o que separará as palavras


AULA 1 - INTRODUÇÃO AO JAVASCRIPT

var nome = 'karine';
var idade = 25;
var idade2 = 10;
var frase = 'Japão é o melhor time do mundo'
alert(nome + ' tem ' + idade + ' anos');

console.log(nome);
console.log(idade + idade2)
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.replace('Japão','Brasil'))
*/