window.onload = () => {
  const base_url = "http://localhost/Hospital/hospital-back-end/"
  const register_btn = document.getElementById("register-button");
  register_btn.addEventListener("click", register);

  function register(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let birth_date = document.getElementById("birth_date").value;
    let gender_name = document.getElementsByClassName("gender");
    let usertype_id = document.getElementsByClassName("user_type");

    birth_date = String(birth_date)
    let gender = null;
    for (let i = 0; i < gender_name.length; i++) {
      if (gender_name[i].checked) {
        gender = gender_name[i].value;
      }
    }

    for(let i = 0; i < usertype_id.length;i++){
      if(usertype_id[i].checked){
        usertype = usertype_id[i].value;
      }
      console.log('the end')
    }
    console.log('the end2')
    usertype = String(usertype)
    if(usertype == 'admin'){
      usertype = 1
    }else if(usertype == 'employee'){
      usertype = 2
    }else if(usertype == 'patient'){
      usertype = 3
    }

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("name", name);
    data.append("birth_date", birth_date);
    data.append("gender", gender);
    data.append('usertype', usertype)
    
    axios
      .post(base_url + 'register_api.php/', data)
      .then((result) => {
        if (result.data.status == "success") {
          console.log("registered succesfully");
          window.location.href = 'login.html'
        }else{
          console.log('i am here')
        }
      })
      .catch((err) => {
        console.error(err);
      });

    

  }

  
};