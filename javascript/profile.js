//DOM
window.onload = function () {
    getMusProfileInfofromDb();
};

function printMusProfileInfo(user) {
    let instruments = user.instruments;
    user.instruments.forEach((element, index) => {
        if (index === 0) {
            instruments = element;
        } else {
            instruments += ' | ' + element;
        }
    });

    let places = user.places;
    user.places.forEach((element, index) => {
        if (index === 0) {
            places = element;
        } else {
            places += ', ' + element;
        }
    });
    
    document.getElementById('mus-info').innerHTML = `
    <div class="mus-video-div">
        <iframe id="mus-video" class="mus-video" src="${user.video}" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="container my-3">
        <div class="d-flex">
            <div class="flex-fill">
                <img class="mus-profile-img" src="${user.photo}" alt="">
            </div>
            <div class="flex-fill">
                <h5 id="mus-name">${user.name}</h5>
                <h6 class="text-muted text-capitalize mb-0" id="mus-instruments">${instruments}</h6>
                <p class="text-muted mt-0" id="mus-places">${places}</p>    
            </div>
        </div>              
    </div>
    <div class="container my-3">
        <div class="d-flex justify-content-end"">
            
            <button type="button" class="btn btn-dark mr-2 btn-font-size" data-toggle="modal" data-target="#exampleModalCenter">
                AGENDA
            </button>            
            <button id="btn-offer" type="button" class="btn btn-secondary btn-ligth-green">
                FAZER UMA PROPOSTA
            </button>
            
        </div>
    </div>
    <div class="container mb-3">
        <div class="card bg-light mb-3>
            <div class="card-body">
                <p class="card-text p-2 mus-description">${user.description}</p>
            </div>
        </div>
    </div>
    `;
    printMusNameAgenda(user.name);
    document.getElementById('btn-offer').addEventListener('click',goOffer);
}

function printMusNameAgenda(name) {
    document.getElementById('mus-name-agenda').innerHTML = name;
}

//funções profile
let userMusId = "m01";

function getMusProfileInfofromDb() {
    database.ref('users_musicians/' + userMusId).once('value')
        .then(function (snapshot) {
            let user = snapshot.val();
            printMusProfileInfo(user);
        });
}

function goOffer() {
    let userId = 1;
    window.location = 'offer.html';
}

