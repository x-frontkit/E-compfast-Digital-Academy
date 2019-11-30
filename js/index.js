// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAFThvhXDXQNaMbGU3Hqgbaiab4P92UY4c",
    authDomain: "e-bookdigital.firebaseapp.com",
    databaseURL: "https://e-bookdigital.firebaseio.com",
    projectId: "e-bookdigital",
    storageBucket: "e-bookdigital.appspot.com",
    messagingSenderId: "939307484689",
    appId: "1:939307484689:web:1ebe74f302c751b85b53b0",
    measurementId: "G-V2G0WLPX3W"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

    function cek_login(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return true;
      } else {
          window.location.href = "/";
        }
    });
  }
  cek_login();

  

   function logout(){
    firebase.auth().signOut().then(function() {
      console.log("sign out berhasil");
      window.location.href = "login.html";
    }).catch(function(error) {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    });
  }