function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play(); // vai dá play no audio

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;


}








// document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// o ponto depois de tecla_pom) vai entrar no documento que tá sendo chamado e terá seus vcalores também
// o onclick será a mesma coisa do HTML, só que como uma boa prática dentro do jS
// É importante guardar a função e não chamar
// e pra fazer isso, é necessário tirar o () da function
