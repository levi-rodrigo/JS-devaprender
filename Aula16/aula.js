// IF ELSE

// Se a hora estive entre 06:00 e 12:00 é Bom Dia!
// Se estiver entre 12:00 até 18:00, é Boa Tarde!
// Caso Contrario: Boa Noite!

// if (condicao) {
    // Codigo a ser executado
// } else if (outraCondicao) {
    // codigo a ser executado
// } else {
    // codigo a ser executado
// }

let hora = 19;

if (hora > 6 && hora < 12){
    console.log('Bom Dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}