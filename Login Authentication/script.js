function showRegister(){
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function register(){

    let username=document.getElementById("regUsername").value;
    let password=document.getElementById("regPassword").value;

    if(username=="" || password==""){
        alert("Please fill all fields");
        return;
    }

    let user={
        username:username,
        password:password
    }

    localStorage.setItem(username,JSON.stringify(user));

    alert("Registration successful");

    showLogin();
}

function login(){

    let username=document.getElementById("loginUsername").value;
    let password=document.getElementById("loginPassword").value;

    let storedUser=localStorage.getItem(username);

    if(storedUser==null){
        alert("User not found");
        return;
    }

    let user=JSON.parse(storedUser);

    if(password===user.password){
        alert("Login successful");
    }
    else{
        alert("Incorrect password");
    }

}