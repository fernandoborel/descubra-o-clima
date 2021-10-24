// prevenir que o formulário seja enviado
document.querySelector('.busca').addEventListener('submit', async (event)=> {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
   
    if(input !== ''){
        showWarning('Carregando...');

        // consumindo API
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=5d35be4587ec4b2078b25a41699b10c7&units=metric&lang=pt_br`;
        
        let results = await fetch(url);
        let json = await results.json();
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};