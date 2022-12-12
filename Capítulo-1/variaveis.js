
// declaração de variáveis
var x;    // declara uma variável chamada x

// valores podem ser atribuídos às variáveis com o sinal =
x = 0;    // agira a variável x tem o valor 0
x         // => =: uma varíavel é avaliada com seu valor 

// JavaScript aceita vários tipos de valores 

x = 1;                  // números
x = 0.01;               // Apenas um tipo Number para inteiros e reais
x = "Hello World";      // strings de texto entre aspas
x = 'JavaScript';       //  apóstrofos também delimitam string
x = true;               // valores booleanos 
x = false;              // o outro valor booleano
x = null;               // null é um valor especial que significa "nenhum valor"
x = undefined;          // undefined é como null


// declaração de um objeto 
var boneco = {                  // objetos são colocados entre chavas
    topic: "JavaScript",        // a propriedade "topic" tem o valor "JavaScript"
    fat: true                   // a propriedade "fat" tem o valor "JavaScript"
};                              // a chava marca o fim do objeto

// acesse as propriedades de um objeto com . ou []:

boneco.fat                      // => "JavaScript"
book ["fat"]                    // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";       // crie novas por meio de atribuição
book.contents = {};

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];      // um array de 4 valores, delimitados com [ e ].
primes [0]                      // => 2: o primeiro elemento (índice 0) do array.
primes.length                   // => 4: quantidade de elementos no array.
primes [primes.length-1]        // =7: o último elemento do array.
primes [4] = 9;                 // adiciona um novo elemento por meio de atribuição
primes [4] = 11;                // ou altera um elemento existente por meio de atribuição
var empty = []                  // [] é um array vazio, sem quarquer elemento
empty.length                    // => 0

// Os arrays e objetos podem conter outros arrays e objetos: 
var points = [              // um array com 2 elementos.
    {x:0, y:0},             // cada elemento é um objeto 
    {x:1, y:1}
];
var data = {                // um objeto com 2 propriedades
    trial1: [[1,2], [3,4]], // o valor de cada propriedade é um array.
    trial2: [[2,3], [4,5]], // os elementos dos arrays são arrays. 

}

    
