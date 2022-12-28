

function validate(){
    var fname = document.getElementById("firstname").value;
    if(fname == ""){
        document.getElementById("username").innerHTML = "First Name cannot be empty" ;
        return false;
    } else{
        document.getElementById("username").innerHTML = "" ;
    }

}

function two(){
        var lname = document.getElementById("lastname").value;
    if(lname == ""){
        document.getElementById("usernamelast").innerHTML = "Last Name cannot be empty" ;
        return false
    }else{
        document.getElementById("usernamelast").innerHTML = "" ;
    }
}

function three(){
    var pass = document.getElementById("password").value;
    if( pass == ""){
        document.getElementById("passwordone").innerHTML = " Password cannot be empty" ;
        return false
    }else{
        document.getElementById("passwordone").innerHTML = "" ;
    }
}

function four(){
    var mail = document.getElementById("email").value ;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail == ""){
        document.getElementById("emailone").innerHTML = "Email cannot be empty" ;
        return false
    }else if(!filter.test(mail)) {
        document.getElementById("emailtwo").innerHTML =" Looks like this is not an email" ;
    } else{
        document.getElementById("emailone").innerHTML = "";
        document.getElementById("emailtwo").innerHTML = "";
    }

}





function opacity(){
    document.addEventListener('click' , ()=>{
        document.querySelectorAll(".form-control").style.opacity = ("100%")
    })
}
