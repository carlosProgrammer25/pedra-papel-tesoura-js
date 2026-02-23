
//selecionando todos as div > img da clas player options
var elementos = document.querySelectorAll('.player-options div img')
var playerOpt = '';
var inimigoOpt = '';

//Validar vitoria ou empate
function validarVitoria() {

    let vencedor = document.querySelector('.vencedor');

    if (playerOpt == "papel") {
        if (inimigoOpt == "papel") {
            vencedor.innerHTML = "O jogo foi empatado";
        } else if (inimigoOpt == "tesoura") {
            vencedor.innerHTML = "O inimigo ganhou";
        } else if (inimigoOpt == "pedra") {
            vencedor.innerHTML = "O player ganhou";
        };
    };


    if (playerOpt == "tesoura") {
        if (inimigoOpt == "papel") {
            vencedor.innerHTML = "O player ganhou";
        } else if (inimigoOpt == "tesoura") {
            vencedor.innerHTML = "O jogo foi empatado";
        } else if (inimigoOpt == "pedra") {
            vencedor.innerHTML = "O inimigo ganhou";
        };
    };


    if (playerOpt == "pedra") {
        if (inimigoOpt == "papel") {
            vencedor.innerHTML = "O inimigo ganhou";
        } else if (inimigoOpt == "tesoura") {
            vencedor.innerHTML = "O player ganhou";
        } else if (inimigoOpt == "pedra") {
            vencedor.innerHTML = "O jogo foi empatado";
        };
    };
};


//resetando a opacidade da img inimigo
function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div');

    for (i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    };
}


function inimigoJogador() {
    //gerando numeros que sao usados como indice
    let rand = Math.floor(Math.random() * 3);

    //gerando um objeto com as div encontradas em enemy-options
    const enemyOptions = document.querySelectorAll('.enemy-options div');

    resetInimigo();

    for (i = 0; i < enemyOptions.length; i++) {
        //selecionando elemento .enemy-options div com base no seu index, atras do numero sorteado 'rand'
        if (i == rand) {
            //childNodes = retorna todos os filhos de um elemento(texto, espaço, tags)
            //[0] pega o primeiro filho

            //selecione o elemento de enemyOptions com base no index[i]
            //selecione o primeiro elemento do primeiro primeiro elemento de enemyOptions
            //aplique estilo opacidade 1
            enemyOptions[i].childNodes[0].style.opacity = 3;

            //armazena em inimigoOpt o primeiro filho do elemenemyOptions[x] e pegue valor do atributo opt
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        };
    };

    //Verifica quem ganhou ou se houve empate
    validarVitoria();
};


//resetando a opacidade da img player
function resetOpacity() {
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    };
};

//selecionar player e chamar inigmido para jogar
for (let i = 0; i < elementos.length; i++) {
    //t = objeto criado pelo navegador quando acontece o evento de click
    // addEventListener = adiciona um ouvinte de evento (event listener) ao elemento. Esse ouvinte é acionado quando o evento ocorre
    elementos[i].addEventListener('click', (t) => {
        
        resetOpacity();

        //selecionando elemento na tela, mudando opacidade
        t.target.style.opacity = 1;

        //armazenando opcao selecionada pelo jogador na variavel
        playerOpt = t.currentTarget.getAttribute('opt');

        //chamando funcao jogador, depois que eu jogar
        inimigoJogador();
    })
};


/*
Este projeto foi desenvolvido com JavaScript puro,
utilizando apenas recursos nativos da linguagem e da API do DOM,
sem dependência de frameworks ou bibliotecas externas.
*/
