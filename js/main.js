function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play(); // vai dá play no audio

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


}








// document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// o ponto depois de tecla_pom) vai entrar no documento que tá sendo chamado e terá seus vcalores também
// o onclick será a mesma coisa do HTML, só que como uma boa prática dentro do jS
// É importante guardar a função e não chamar
// e pra fazer isso, é necessário tirar o () da function
