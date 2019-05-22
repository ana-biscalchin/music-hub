//DOM
window.onload = function () {
    getMusHomeInfofromDb();
    addEventListener
};



var input = document.querySelector('#leticia');
     var button = document.querySelector('#bruna');
     var select = document.querySelector('select');


function printMusProfileInfo(musicians, key) {
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

    

return `
    
<div class="bg-white" id="${key}">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
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

// <div class="card-footer">
//                 <i class="fas fa-dollar-sign"></i>
//                     <small class="text-muted">Média cachê:  ${musicians.cost}</small>
                    
//                 </div>
    // getMusHomeInfofromDb(user.name);
    // document.getElementById('btn-offer-login').addEventListener('click', loginAfterOffer);
    // document.getElementById('btn-offer-register').addEventListener('click', registerAfterOffer);
}

//home - final

function getMusHomeInfofromDb() {

    database.ref('users_musicians/').once('value')
        .then(function (snapshot) {
            searchMus(snapshot);

        });
 }
 
 function searchMus(snapshot) {
    
        snapshot.forEach(function(childSnapshot) {
            let musicians = childSnapshot.val();
            const div = document.createElement('div');
            div.innerHTML = printMusProfileInfo(musicians);
            document.getElementById('mus-home').appendChild(div);   
            let key = childSnapshot.key;        
            printMusProfileInfo(musicians, childSnapshot.key);
            // filter(musicians);
            let idmus = document.getElementById(key).addEventListener('click', goMusicianProfile(key));
          });
    }

    

    // function filter(musicians) {
    //     let data = [musicians];
    //     data.push(musicians)
        
    //     console.log(data)

   
    
    //  button.addEventListener('click', function () {
    
    //      console.log(musicians)
    //     var val = input.value;
    //     var prop = select.value;
    //     musicians.filter(musicians => {
    //         console.log(musicians.name)
    //         if (val == musicians[prop]) {
    //             var div = document.createElement('div');
     
    //             div.innerHTML = template(musicians.name, musicians.instruments, musicians.cost, musicians.places, musicians.genres)
    //             area.appendChild(div)
    //         }
    //     })
    //  });
    //  }
    //  function template(name, instruments, cost, places, genres) {
    //     return `<a href= >${name}</a> <p>${instruments}</p> <p>${cost}</p> <p>${places}</p> <p>${genres}</p>`
    //  }

    function goMusicianProfile(key){
        console.log(key);
    }