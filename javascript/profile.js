//DOM

window.onload = function () {
    getMusProfileInfofromDb();
};

//funções profile
let userMusId = "m01";

function getMusProfileInfofromDb() {
    // console.log('oi');
    // database.ref('users_musicians/' + userMusId).once('value')
    //     .then(function (snapshot) {
    //         renderMusProfileInfo(snapshot);
    //     });
}

// function renderMusProfileInfo(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//         let user = childSnapshot.val();
//         let name = user.name;
//         console.log(name);
//       });
// }
