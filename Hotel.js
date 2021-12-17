let loggedIn = false;

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
}

function closeForm() {
    let form = document.getElementById("myForm")
    form.style.display = "none";
}



function welcome() {
    let username = localStorage.getItem("username");

    if (username != null)
        alert("Benvenuto " + username);
    else {
        alert("Benvenuto!")
    }
}

function save() {
    let userName = document.getElementById("usernameInput").value; //value -> prende ciò che ha scritto l'utente
    let password = document.getElementById("passwordInput").value;
    localStorage.setItem('username', userName); //salvare username con chiave username e valore ciò che ha scritto l'utente
    localStorage.setItem('password', password);
}

function checkLoggedUser() {
    //recupero dal local storage username e password
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    //se l'utente è loggato:
    if (username != null && password != null) {
        loggedIn = true;

        //recupero e nascondo la form
        let form = document.getElementById("myForm");
        form.style.display = "none";

        //rendo il button che apre la login disabilitato
        let button = document.getElementById("openLoginForm");
        button.disabled = loggedIn; //true
        button.style.opacity = 0.3;

        let LogOutBotton = document.getElementById("LogOut");
        LogOutBotton.style.display = "block";
    }
    else {
        loggedIn = false;
        let form = document.getElementById("myForm");
        form.style.display = "none";

        //rendo il button che apre la login abilitato
        let button = document.getElementById("openLoginForm");
        button.disabled = loggedIn; //disabilitato = false => abilitato
    }

}


//function clearLS() {
    //localStorage.clear(); //Svuota il local storage (o session storage se chiamata sul session storage)
   // let storedUsername = localStorage.getItem('username');

    //if (storedUsername != null)
        //localStorage.removeItem('username');
//}

function Exit() {
    let ex = document.getElementById("");
    ex.disabled = false;
    localStorage.clear();
    let logout = document.getElementById("logout");

}

