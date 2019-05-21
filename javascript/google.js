// $(document).ready(function() {
//     $(".google-button").click((event) => {
//       event.preventDefault();
      
//       let provider = new firebase.auth.GoogleAuthProvider();
      
//       firebase.auth().signInWithPopup(provider)
//       .then((response) => {
//         window.location = "signup.html?id=" + response.user.uid;
//       })
//       .catch((error) => {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//         let email = error.email;
//         let credential = error.credential;
//         alert(errorCode, errorMessage, email, credential);
//       });
//     })
//   });

  // google auth 

  $(".google-button").click(function (event) {
    event.preventDefault();
    console.log("aqui");
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var userId = result.user;
      redirect(userId);
    })

      .catch(function (error) {

        errorMessage(error); 
      });
  });