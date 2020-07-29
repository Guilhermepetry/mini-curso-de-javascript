# Anotações 

## 2º Dia 

O que é um **Array**?

O Array é um variável que guarda uma lista de elementos.
```javascript
const arr = ['banana 🍌', 'maçã 🍎', 'abacaxi 🍍'];

console.log(arr[0]);
// exibe 'banana 🍌'

console.log(arr[1]);
// exibe 'maçã 🍎'

console.log(arr[2]);
// exibe 'abacaxi 🍍'

console.log(arr[arr.length - 1]);
// também exibe 'abacaxi🍍' 

```
\
O que é **Tagged Template String**?

Uma forma mais avançada dos template string são os template strings com marcações ou tags,ou tagged template strings. Com eles, você tem a possibilidade de modificar a saída dos template strings usando uma função.

```javascript
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Olá "
  console.log(strings[1]); // " Mundo"
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Olá ${ a + b } Mundo ${ a * b}`;
// "Bazinga!"

```

O primeiro argumento contém um array de literais ("Olá" e "Mundo" neste exemplo). Do segundo em diante e cada argumento subsequente contém valores previamente processados (algumas vezes chamados cooked) pelas expressões de substituição ("15" e "50" no caso do exemplo). 

fonte: MDN