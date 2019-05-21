var json = '[{ "name": "André", "instruments": "Voz e Violão", "cost": "$$", "places": "São Paulo",  "genres": "Acústico"}, { "name": "Banda Musicália - O melhor da MPB", "instruments": "voz, violao, baixo, bateria, guitarra", "cost": "$$$", "places": "São Paulo", "genres": "MPB, Samba, Popular" }, {"name": "Julia", "instruments": "Voz e Violão", "cost": "$", "places": "Campinas", "genres": "Rock"}]';
var data = JSON.parse(json);
const area = document.getElementById('paloma')
var input = document.querySelector('input');
var button = document.querySelector('button');
var select = document.querySelector('select');
button.addEventListener('click', function () {
    var val = input.value;
    var prop = select.value;
    data.filter(element => {
        console.log(element.name)
        if (val == element[prop]) {
            var div = document.createElement('div');
            
            div.innerHTML = template(element.name, element.instruments, element.cost, element.places, element.genres)
            area.appendChild(div)
        }
    })
});
function template(name, instruments, cost, places, genres) {
    return `<a href= >${name}</a> <p>${instruments}</p> <p>${cost}</p> <p>${places}</p> <p>${genres}</p>`
}
