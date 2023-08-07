const inputCalorias = document.getElementById("inputCalorias");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoCaloriasTotais = document.getElementById("botaoCaloriasTotais");
const botaoDicionarioCalorias = document.getElementById("botaoDicionarioCalorias");
let caloriasTotais = 0;
let registroCalorias = [];
const dicionarioCalorias = {};

const addCalorias = () => {

    registroCalorias.push(inputCalorias.value);
    console.log(registroCalorias);

}

const calcularCalorias = () => {

    registroCalorias.forEach(caloria => {
        caloriasTotais += parseFloat(caloria);
    });

    console.log(caloriasTotais);

}

const mostrarCalorias = () => {

    registroCalorias.forEach((valor, chave) => {

        dicionarioCalorias[chave] = valor;

    });

    console.log(dicionarioCalorias);

}

botaoAdicionar.addEventListener("click", addCalorias);
botaoCaloriasTotais.addEventListener("click", calcularCalorias);
botaoDicionarioCalorias.addEventListener("click", mostrarCalorias);


// const showCalorias = () => {
//     const valorCalorias = inputCalorias.value;
//     console.log(valorCalorias);
// }

// botaoAdicionar.addEventListener("click", showCalorias);