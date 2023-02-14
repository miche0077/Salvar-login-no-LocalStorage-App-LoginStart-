let user = {
    name: "mich",
    password: 1234,
  };
  
let username = document.getElementById("username");
let password = document.getElementById("password");   
  
const handleChangeUserName = (e) => {user.username = e.target.value}
const handleChangeUserPassword = (e) => {user.password = e.target.value}

function logar() {

    if (username == user.name && password == user.password) {
      localStorage.setItem('username', user.name)
      localStorage.setItem('password', user.password)
      alert("Logado");
      location.replace('./logout.html')
    } else {
      alert("credenciais incorretas");
    }
  }
  