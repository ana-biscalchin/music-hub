//DOM
window.onload = function () {
    getMusHomeInfofromDb();
};

function printMusProfileInfo(div, musicians, key) {
    let instruments = musicians.instruments;
    musicians.instruments.forEach((element, index) => {
        if (index === 0) {
            instruments = element;
        } else {
            instruments += ' | ' + element;
        }
    });

    let places = musicians.places;
    musicians.places.forEach((element, index) => {
        if (index === 0) {
            places = element;
        } else {
            places += ', ' + element;
        }
    });

    div.innerHTML = `
    
<div class="bg-white" id='div-m01'>
    <div class="card-horizontal">
        <div id='div-${key}' class="img-square-wrapper">
            <img class="card-img logo-img-card" src="${musicians.photo}" alt="Card image cap">
        </div>
        <div class="card-body card-wi">
            <h4 class="card-title">${musicians.name}</h4>
            <p class="card-instruments">${instruments}</p>
            <p class="card-places">${places}</p>
        </div>
    </div>
</div>
`
    goProfile(key)
}

//home - final

function getMusHomeInfofromDb() {

    database.ref('users_musicians/').once('value')
        .then(function (snapshot) {
            searchMus(snapshot);

        });
}

function searchMus(snapshot) {

    snapshot.forEach(function (childSnapshot) {
        let musicians = childSnapshot.val();
        let key = childSnapshot.key;
        const div = document.createElement('div');
        printMusProfileInfo(div, musicians, childSnapshot.key);
        document.getElementById('mus-home').appendChild(div);
    });
}

function goProfile(key) {
    console.log(key);
    element = document.querySelector('#mus-home');
    element.addEventListener('click', goProfileWindow);
}

function goProfileWindow() {
    window.location = 'profile.html';
}
