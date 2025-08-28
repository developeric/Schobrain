//ANIMACIONES DEL FRONT///////////////////////////////////////////
const btn = document.getElementById("btn")                      
const container = document.querySelector(".container")          
const btnSignIn = document.getElementById("btn-sign-in")        
const btnSignUp = document.getElementById("btn-sign-up")
////////////////////////////////////////////////////////////////
const register = document.getElementById("register-form")  
const login = document.getElementById("login-form")
/////////////////////////////////////////////////////////////////


btnSignIn.addEventListener("click",()=>{                        
    container.classList.remove("toggle");                       
});                                                             

btnSignUp.addEventListener("click",()=>{                       
    container.classList.add("toggle")     
});



////Datos del LOGIN////////////////////////////////

login.addEventListener("submit", async (e)=>{     
e.preventDefault();

try {
    
const formData = new FormData(login)

const body = {
    email: formData.get("email"),
    password: formData.get("password")
}

const response = await fetch("http://localhost:4000/api/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
})

            const data = await response.json();

if (response.ok){
    window.location.href ="./bienvenida.html"
    alert("Bienvenido a la pagina");
    console.log(data);

}else{
    alert("Ha ingresado mal la contraseña o correo")
}

} catch (error) {
    console.log("Se ha ingresado al catch",error);
}

});

////////////////////Datos guardados del Register////////////////////////////
register.addEventListener("submit", async (e)=>{     
e.preventDefault();

try {
    
const formData = new FormData(register)

const body = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password")
}

const response = await fetch("http://localhost:4000/api/register",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
})

            const data = await response.json();

if (response.ok){
    window.location.href ="./bienvenida.html"
    alert("Bienvenido a la pagina");
    console.log(data);

}else{
    alert("Este Correo o Nombre de Usuario ya está en uso")
}

} catch (error) {
    console.log("Se ha ingresado al catch",error);
}

});
/////////////////////////////////////////////////////////////////////