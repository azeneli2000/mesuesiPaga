firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      // document.getElementById("user_div").style.display = "block";
      // document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
      var email_id = user.email;
      if(user != null){
  
      
        document.getElementById("login").innerHTML = email_id;
     //alert("Welcome User : " + email_id);
       //sessionStorage.setItem('email',email_id);
       //alert (sessionStorage.getItem('email'));
      }
  
    } else {
      // No user is signed in.
  window.location.replace("login.html");
    //  window.alert("goodbye User : " + email_id);
  
    }
  });
  function logout(){
    firebase.auth().signOut();
  }