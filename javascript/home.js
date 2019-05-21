//DOM
window.onload = function () {
    getMusHomeInfofromDb();
};


function printMusProfileInfo(musicians) {
    document.getElementById('mus-home').innerHTML = `
    
<div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="card-img" src="${musicians.photo}" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${musicians.name}</h4>
                        <p class="card-text">${musicians.description}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    </div>
</div>`;
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