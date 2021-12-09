/////
// Exercícios Aula 04 - TypeScript
// Bootcamp FullStack Etho
// Autor: Mário Augusto Lafetá Velloso
// Data : 08/12/2021
/////

// Exercício 1
const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers: (string|number)[]  = [1, 'one', 2, 'two', 3, 'three'];

// Exercício 2
interface Book {
   title: string;
   author?: string;
};

const book: Book = {
	title: 'Harry Potter'
};

function addToLibrary(item: Book) {
    const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
    console.log(response);
};

console.log(addToLibrary(book));

// Exercício 3
let saldo = 0;

function atualizaSaldo(money: number, message?: string): void {
   saldo += money;
   console.log(`Saldo atual: ${saldo}`);
   if (message) {
      console.log(message);
      console.log('O saldo da conta foi atualizado.');
   };
};

atualizaSaldo(1000);
atualizaSaldo(200, "teste");

// Exercício 4

function passValue <T> (value: T): T {
   return value;
}

console.log(passValue <number> (10));

///
/// Assincronia
///

// Exercício 1

const url = 'https://foodish-api.herokuapp.com/api/images/pizza';

async function getFood() {
   const myRequest = await fetch(url);
   const response = await myRequest.json();
  
   console.log(response);
}

getFood();

// Exercício 2
/* Crie uma promise que deverá falhar, mostrando uma mensagem de erro do reject() 
a partir do código base abaixo: */

const param = false;

const getUser = (param?: boolean) => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (param) {
         resolve("Promise funcionou");
       } else {
         reject("Promise falhou!");
       }
     }, 2000);
   });
 };

 getUser().then(res => console.log(res)).catch(err => console.log("Erro: ", err));