// ## Atividade 1: Maps

// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// 1. Crie uma função `getAdmins` que recebe um `Map`;
// 2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// 3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.


function getAdmins() {
    const colabs = new Map();
    colabs.set('Higor', 'admin');
    colabs.set('Suzi', 'admin');
    colabs.set('Samuel', 'user');
    colabs.set('Blaitz', 'user');
    lista = [];
    let i = 0;
    for (let [nome, cargo] of colabs) {
        if (cargo === 'admin') { lista[i] = nome; i++ }

    }
    console.log(`\nOs usuários admins da lista são: \n${lista}\n`);
}
getAdmins();


// ## Atividade 2: Sets

// Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.


const array = [30, 30, 40, 5, 223, 2049, 3034, 5];
const unicos = new Set();
for (let i = 0; i < array.length; i++) {
    unicos.add(array[i]);
}
console.log(unicos);