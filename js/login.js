window.onload = () => {
  const base_url = "http://localhost/Hospital/hospital-back-end/"
  const login_button = document.getElementById("login-button");
  login_button.addEventListener("click", login);

  function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);    

    console.log(data)

    axios
      .post(base_url + 'login_api.php/', data)
      .then((result) => {
        console.log(result.data.status)
        if (result.data.user_id) {
          console.log("Logged In");
          sessionStorage.setItem("user_id", result.data.user_id);
          window.location.href = "../index.html"
        }
      })
      .catch((err) => {
        console.error(err);
      });

    

  }

  
};