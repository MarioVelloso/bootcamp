/////
// Exercícios Aula 01 Sintaxe e Dados
// Bootcamp FullStack Etho
// Autor: Mário Augusto Lafetá Velloso
// Data : 06/12/2021
/////

const numbers = [2, 8, 16];
const users = [{id: 4781, name: 'Juan Carlos'}, {id: 6538, name: 'Maria Benita'}, {id: 3874, name: 'Manuela Assis'}];

/* 1 - Mapas */
const array1 = [1, 4, 9, 16];

const map1 = array1.map((valor, index, _array1) => ({ index: index }));

console.log(array1);
console.log(map1);

/* 1) Faça um map no array 'numbers', para que cada valor do array, seja multiplicado por 3 /
 / 2) Faça um map no array 'numbers', para que cada valor do array, seja somado com o último elemento / 
 / 3) Faça um map no array 'numbers', para que cada valor do array, seja subtraído com o primeiro elemento 
*/

// 1.1
const mult3 = numbers.map(x => x * 3);
console.log(mult3);

// 1.2
const somaUltimo = numbers.map(x => x + numbers[numbers.length - 1]);
console.log(somaUltimo);

// 1.3
const subtraiPrim = numbers.map(x => x - numbers[0]);
console.log(subtraiPrim);

/* 2 - Filtros /
 / 1) Faça um filter no array 'numbers', para que não contenha valores menores que 9 /
 / 2) Faça um filter no array 'numbers', para que não contenha dados do tipo número /
 / 3) Faça um filter no array 'users', para que não contenha o usuário com id 6538 
*/

// 2.1
function maiorQue9(valor) {
	return valor >= 9
}
const maiores = numbers.filter(maiorQue9)
console.log(maiores);

// 2.2
function naoNumero(valor) {
	return typeof valor != "number";
}
const naoNumericos = numbers.filter(naoNumero)
console.log(naoNumericos);

// 2.3
const usuarios = users.filter(x => x.id != 6538);
console.log("Nao há usuário 6538: ", usuarios);

/* 3 - Reduções /
 / 1) Faça um reduce no array 'users', para que cada objeto não contenha a propriedade 'name' /
 / 2) Faça um reduce no array 'users', retornando um objeto com a seguinte estrutura: { [user.name]: { id: 4781 } } 
*/

// 3.1
const usersIds = users.reduce(( acumulador, valorAtual) => {
	return {
  	ids: [...acumulador.ids, valorAtual.id],
  }
}, {
	ids: [],
});
console.log("Reduce em users, retirando name: ", usersIds);

// 3.2
const usersNovo = users.reduce(( acumulador, valorAtual) => {
	return [...acumulador, { [valorAtual.name]: {id: valorAtual.id} }]
}, []);
console.log("Nova estrutura de users: ", usersNovo);

/* 4 - Busca /
 / 1) Faça um find no array 'users', buscando o objeto com a propriedade name igual a 'Manuela Assis' /
 / 2) Faça um find no array 'numbers', buscando o valor menor que 15 /
 / 3) Faça um includes no array 'numbers', testando se o valor 8 existe /
 / 4) Faça um some no array 'numbers', testando se algum valor maior que 4 existe /
 / 5) Faça um every no array 'numbers', testando se todos os valores são do tipo string 
*/

// 4.1
const encontrado = users.find(x => x.name == 'Manuela Assis');
console.log("Procurando pela Manuela Assis: ", encontrado);

// 4.2
const menor15 = numbers.find(x => x < 15);
console.log("Primeiro valor encontrado, menor que 15: ", menor15);

// 4.3
const resultado = numbers.includes(8);
console.log("Há o valor 8 no array numbers? ", resultado);

// 4.4
const maior4 = numbers.some(x => x > 4);
console.log("Há valor maior que 4 no array numbers? ", maior4);

// 4.5
const saoStrings = numbers.every(x => typeof x == 'string');
console.log("Os valores do array numbers são do tipo string? ", saoStrings);

/* 5 - Desestruturação /
/ 1) Faça uma desestruturação do array 'users', extraindo o primeiro e segundo valor /
/ 2) Faça uma desestruturação do array 'users', extraindo a propriedade name do primeiro valor /
/ 3) Faça uma desestruturação do array 'users', extraindo a propriedade id do primeiro valor, e name do segundo valor 
*/

// 5.1
const [primValor, segValor] = users;
console.log("Primeiro valor: ", primValor);
console.log("Segundo valor: ", segValor);

// 5.2
const [primUsuario] = users;
const {id, name} = primUsuario;
console.log("Name do primeiro valor: ", name);

// 5.3
const [primeiroValor, segundoValor] = users;
const {id: id2} = primeiroValor;
const {name: name2} = segundoValor;
console.log("id do primeiro user: ", id2);
console.log("name do segundo user: ", name2);

/* 6 - Spread Operator /
 / 1) Crie um novo array com os valores dos arrays 'number' e 'users', usando o spread operator 
*/

// 6.1
const novoArray = [...numbers, ...users];
console.log("Soma dos arrays numbers e user: ", novoArray);

/* 7 - Inserção /
 / 1) Faça um push no array 'numbers', adicionado o valor 45 /
 / 2) Faça um push no array 'usesr', adicionando o valor {id: 8893, name: 'Dominique Carlos'} /
 / 3) Faça um unshift no array 'users', adicionando o valor {id: 7436, name: 'Mariano Azevedo'} /
 / 4) Faça um unshift no array 'numbers', adicionando os valores -20, -7, 89 
*/

// 7.1
numbers.push(45);
console.log("Push de 45 em numbers: ", numbers);

// 7.2
users.push({id: 8893, name: 'Dominique Carlos'});
console.log("Push de Dominique e Carlos em users: ", users);

// 7.3
users.unshift({id: 7436, name: 'Mariano Azevedo'});
console.log("Unshift de Maria de Azevedo em users: ", users);

// 7.4
numbers.unshift(-20, -7, 89);
console.log("Unshift de -20, -7 e 89 em numbers: ", numbers);