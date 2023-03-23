function tocaSomPom () {

    document.querySelector('#som_tecla_pom').play(); // vai dá play no audio

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;





// document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// o ponto depois de tecla_pom) vai entrar no documento que tá sendo chamado e terá seus vcalores também
// o onclick será a mesma coisa do HTML, só que como uma boa prática dentro do jS
// É importante guardar a função e não chamar
// e pra fazer isso, é necessário tirar o () da function
