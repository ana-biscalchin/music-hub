//DOM
window.onload = function () {
    getMusProfileInfofromDb();
};

function printMusProfileInfo(user) {
    document.getElementById('mus-home').innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    `;
    printMusNameHome(user.name);
    // document.getElementById('btn-offer-login').addEventListener('click', loginAfterOffer);
    // document.getElementById('btn-offer-register').addEventListener('click', registerAfterOffer);
}

function printMusNameHome(name) {
    document.getElementById('mus-home').innerHTML = name;
}

//funções home
let userMusId = "m02";

function getMusProfileInfofromDb() {
    console.log('oi');
    database.ref('users_musicians/' + userMusId).once('value')
        .then(function (snapshot) {
            let user = snapshot.val();
            printMusProfileInfo(user);
        });
}

