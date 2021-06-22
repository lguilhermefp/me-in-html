const all = document.querySelector('*');
const containerLoading = document.querySelector('.container-loading');
const imagem = document.querySelectorAll('.imagem');
const tab = document.querySelectorAll('.tab');
const transformedTab = [...document.querySelectorAll('.tab')];
var main = () => document.querySelectorAll('.frase-final, section > * :not(.open > * > *, .open > * > * > *), section> * > * :not(.open > * > *, .open > * > * > *), section> * > * > * :not(.open > * > *, .open > * > * > *)');
const buttonFechar = [...document.querySelectorAll('.button-fechar')];
const containerStar = document.querySelector('.container-star');
var open = false; //sem o uso dessa variavel, sempre que uma janela e aberta, o click para abrir tambem a fecha por ser um "click fora dela"

//abre janela relacionada ao clicar em imagem
imagem.forEach((someimage, i) => {
    someimage.addEventListener('click', (event) => {
        event.preventDefault();
        openTab(tab[i]);
        hideMain();
    }, false);
});

//fechar janela clicando fora dela ou clicando no botao fechar
document.addEventListener('click', function(event) {
    try{
        if (!document.querySelector('.open').contains(event.target) || buttonFechar.some(b => b.contains(event.target))){
            if(open === true){
                showMain();
                closeTab(document.querySelector('.open'));
            }
        open = true;
        }
    }catch(e){ /*se todas as janelas estiverem fechadas, nao há classe 'open' e e retornado erro */ }
});

/*const hideMain = () => {
    let main = document.querySelectorAll('section > * :not(.open > * > *, .open > * > * > *), section> * > * :not(.open > * > *, .open > * > * > *), section> * > * > * :not(.open > * > *, .open > * > * > *)');
    var not =  document.querySelectorAll('.open > * > * > *');
    console.log(main);
    console.log(not);
    main.forEach((element) => {
        element.style.opacity = "0.4";
    });
    not.forEach((element) => {
        element.style.opacity = "1";
    });
}*/

//altera opacidade do fundo e abre janela ao clicar em imagem caso nao haja outra janela aberta

const showMain = () => {

    main().forEach((element) => {
        element.style.opacity = "1";
    });
}
const hideMain = () => {
    main().forEach((element) => {
        element.style.opacity = "0.4";
    });
}
const openTab = (someTab) => {
    open = false;
    if(!transformedTab.some((t) => t.classList.contains("open"))){
        someTab.classList.remove("tab");
        someTab.classList.add("open");
    }
}
const closeTab = (someTab) => {
    someTab.classList.add("tab");
    someTab.classList.remove("open");
}

//algoritmo para posicionamento do elemento estrela na pagina segundo movimento do mouse
const root = document.documentElement;
document.addEventListener('mousemove', evt => {
    let x = evt.clientX-30;
    let y = evt.clientY;
    console.log(innerHeight);
    if(evt.clientY<5600/15 && innerHeight > 650){
        root.style.setProperty('--mouse-x', x+'px');
        root.style.setProperty('--mouse-y', y*15+'px');
    }
    else{
        containerStar.style.setProperty('top', '805vh');
        containerStar.style.setProperty('left', '66vw');
        containerStar.style.setProperty('height', '100px');
    }
});

//fim do carregamento
containerLoading.style.display = "none";
all.style.overflowY = "visible";
