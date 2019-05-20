//DOM
window.onload = function () {
    getMusHomeInfofromDb();
};


function printMusProfileInfo(musicians) {
    document.getElementById('mus-home').innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="${musicians.photo}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${musicians.name}</h5>
                <p class="card-text">${musicians.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
    `;
    getMusHomeInfofromDb(user.name);
    // document.getElementById('btn-offer-login').addEventListener('click', loginAfterOffer);
    // document.getElementById('btn-offer-register').addEventListener('click', registerAfterOffer);
}

//home

function getMusHomeInfofromDb() {
    console.log('oi');
    database.ref('users_musicians/').once('value')
        .then(function (snapshot) {
            // console.log(snapshot.val())
            // let user = snapshot.val();
            searchMus(snapshot);
            
        });
 }
 
 function searchMus(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let musicians = childSnapshot.val();
            console.log(musicians);
            console.log(musicians.genres);
            printMusProfileInfo(musicians);
          });
    }