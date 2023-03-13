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

    axios
      .post(base_url + 'login_api.php/', data)
      .then((result) => {
        if (result.data.user_id) {
          sessionStorage.setItem("user_id", result.data.user_id);
          sessionStorage.setItem("usertype_id", result.data.usertype_id);
          let usertype_id = parseInt(result.data.usertype_id);
          if(result.data.usertype_id == 3){
            window.location.href = "../index.html"
          }else if(result.data.usertype_id == 2){
            window.location.href = "../employees.html"
          }else if(result.data.usertype_id == 1){
            window.location.href = "../admin_panel.html"
            console.log('admin')
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};