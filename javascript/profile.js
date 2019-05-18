//DOM
window.onload = function () {
    getMusProfileInfofromDb();
};

function printMusProfileInfo(user) {
    document.getElementById('mus-info').innerHTML = `
    <iframe id="mus-video" width="300" height="150" src="${user.video}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h1 id="mus-name">${user.name}</h1>
    <h2 id="mus-instruments">${user.instruments[0]}</h2>
    <h3 id="mus-places">${user.places}</h3>
    <img width="60" height="60" src="${user.photo}" alt="">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        agenda
    </button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterOffer">
        fazer uma proposta
    </button>
    <p id="mus-description">${user.description}</p>
    `;
    printMusNameAgenda(user.name);
    document.getElementById('btn-offer-login').addEventListener('click', loginAfterOffer);
    document.getElementById('btn-offer-register').addEventListener('click', registerAfterOffer);
}

function printMusNameAgenda(name) {
    document.getElementById('mus-name-agenda').innerHTML = name;
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

function loginAfterOffer() {
    let userId = 1;
    window.location.replace('login.html?userId=' + userId + '&userMusId=' + userMusId + '&Offer');
}

function registerAfterOffer() {
    let userId = 1;
    window.location.replace('register.html?userId=' + userId + '&userMusId=' + userMusId + '&Offer');

}

