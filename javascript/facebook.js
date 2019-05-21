$(document).ready(function() {
	$("#facebook-button").click((event) => {
		event.preventDefault();
		
		let provider = new firebase.auth.FacebookAuthProvider();
		
		firebase.auth().signInWithPopup(provider)
		.then((response) => {
			window.location = "signup.html?id="+ response.user.uid;
			
		}).catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			let email = error.email;
			let credential = error.credential;
			alert(errorCode, errorMessage, email, credential);
		});
	})
});	