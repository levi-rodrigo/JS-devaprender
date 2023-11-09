// Falsy

//Undefined
// Null
// 0
// false
// ''
// NaN - Not a number

// Truthy




// ----------------------------------------------------------
//  Operadores Lógicos vão considerar apenas a primeira ordem e ignorar tudo que vem depois, EX: false || 1 || 3. O Operador só vai considerar a primeira sentença (False || 1) e ignorar tudo que vem logo após.
// ----------------------------------------------------------



let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);