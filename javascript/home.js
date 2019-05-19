//DOM
window.onload = function () {
    getMusProfileInfofromDb();
};

function printMusProfileInfo(user) {
    $("#post-list").prepend( `
    <article class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${user.photo}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 id="mus-name">${user.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </article>

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
                <h6 class="text-muted text-capitalize mb-0" id="mus-instruments">${user.instruments[0]}</h6>
                <p class="text-muted mt-0" id="mus-places">${user.places}</p>    
            </div>
        </div>              
    </div>
    <div class="container my-3">
        <div class="d-flex">
            <div class="flex-fill">
                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
                    AGENDA
                </button>
            </div>
            <div class="flex-fill">
                <button type="button" class="btn btn-secondary btn-ligth-green" data-toggle="modal" data-target="#exampleModalCenterOffer">
                    FAZER UMA PROPOSTA
                </button>
            </div>
        </div>
    </div>
    <div class="container mb-3">
        <div class="card bg-light mb-3>
            <div class="card-body">
                <p class="card-text p-2 mus-description">${user.description}</p>
            </div>
        </div>
    </div>
    `);
    printMusNameHome(user.name);
    // document.getElementById('btn-offer-login').addEventListener('click', loginAfterOffer);
}

function printMusNameHome(name) {
    document.getElementById('mus-home').innerHTML = name;
}

//funções home
let userMusId = "m01";

function getMusProfileInfofromDb() {
    console.log('oi');
    database.ref('users_musicians/' + userMusId).once('value')
        .then(function (snapshot) {
            let user = snapshot.val();
            printMusProfileInfo(user);
        });
}

