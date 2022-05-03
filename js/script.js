function changeMode(){
    changeClasses();
    changeText();
}
function changeClasses(){
    button.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    h2.classList.toggle('dark-mode')
    h2_1.classList.toggle('dark-mode')
    div_desc.classList.toggle('dark-mode')
    input.classList.toggle('dark-mode')
    btn_enviar.classList.toggle('dark-mode')
    tools.classList.toggle('dark-mode')
    tools1.classList.toggle('dark-mode')
    tools2.classList.toggle('dark-mode')
    tools3.classList.toggle('dark-mode')
    medias.classList.toggle('dark-mode')
    a.classList.toggle('dark-mode')
    a1.classList.toggle('dark-mode')
    a2.classList.toggle('dark-mode')
    button_tema.classList.toggle('dark-mode')
}


const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const h2 = document.getElementById('nome-id');
const h2_1 = document.getElementById('barra');
const div_desc = document.getElementById('desc-div');
const input = document.getElementsByTagName('input')[0];
const btn_enviar = document.getElementById('btn-enviar');
const tools = document.getElementsByClassName('tools')[0];
const tools1 = document.getElementsByClassName('tools')[1];
const tools2 = document.getElementsByClassName('tools')[2];
const tools3 = document.getElementsByClassName('tools')[3];
const a = document.getElementsByTagName('a')[0];
const a1 = document.getElementsByTagName('a')[1];
const a2 = document.getElementsByTagName('a')[2];
const medias = document.getElementsByClassName('info-vars-medias')[0];
const button_tema = document.getElementsByClassName('button-tema')[1];





button.addEventListener('click', changeMode);
