// prevenir que o formulário seja enviado
document.querySelector('.busca').addEventListener('submit', (event)=> {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
   
    if(input !== ''){
        showWarning('Carregando...');

        // consumindo API
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={API key}`
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};