//DOM
window.onload = function () {
    getMusProfileInfofromDb();
};

function printMusProfileInfo(user) {

    document.getElementById('mus-info').innerHTML = `
    <iframe id="mus-video" width="560" height="315" src="${user.video}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h1 id="mus-name">${user.name}</h1>
    <h2 id="mus-instruments">${user.instruments[0]}</h2>
    <h3 id="mus-places">${user.places}</h3>
    <img width="60" height="60" src="${user.photo}" alt="">
    <button id="btn-mus-agenda">agenda</button>
    <button id="btn-mus-offer">fazer uma proposta</button>
    <p id="mus-description">${user.description}</p>
    `;
}

//funções profile
let userMusId = "m01";

function getMusProfileInfofromDb() {
    console.log('oi');
    database.ref('users_musicians/' + userMusId).once('value')
        .then(function (snapshot) {
            let user = snapshot.val();
            printMusProfileInfo(user);
        });
}

