function tocaSomPom () {
    document.querySelector('.tecla_pom') .play();
}


const listaDeTeclas = document.querySelector('.tecla');

listaDeTeclas[0] .onclick = tocaSomPom;