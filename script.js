var Password = document.getElementById("password");
    function toggle(elem) {
        let type = Password.getAttribute ('type')
        if(type === 'password'){
            Password.setAttribute('type','text')
            elem.innerText = "Hide Password"
        }
        else{
            Password.setAttribute('type','password')
            elem.innerText = "Show Password"
        }
    
    }
    
  