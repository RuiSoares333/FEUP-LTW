function attachValidationEvents(){
    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");

    usernameEvent(username);
    nameEvent(name);
    emailEvent(email);
    passwordEvent(password);
    password2Event(password, password2);
    phoneEvent(phone);
    addressEvent(address);
}   

function usernameEvent(username){
    username.addEventListener("input", async function () {
        input = username.value;
        warning = username.nextElementSibling;
        if(/[<>\"')(;\/#&]/.test(input.trim())){
            warning.textContent = "non-alphanumeric characters aren't allowed";
        }
        else if(input.trim().length > 14){
            warning.textContent = "username can't have more than 14 characters";
        }
        else{
            const data = new FormData();
            data.append("username" ,input.trim());

            const response = await fetch("../api/form_validation/api_username.php", {
                method: "POST",
                body: data,
            });

            if(await response.json()){
                warning.textContent = "username is taken";
            }
            else{
                warning.textContent = "";
            }
        }
    });
}

function nameEvent(name){
    name.addEventListener("input", function () {
        input = name.value;
        warning = name.nextElementSibling;
        if(/[<>\"')(;\/#&]/.test(input.trim())){
            warning.textContent = "non-alphanumeric characters aren't allowed";
        }
        else if(input.trim().length > 14){
            warning.textContent = "name can't have more than 14 characters";
        }
        else {
            warning.textContent = "";
        }
    })
}

function emailEvent(email){
    email.addEventListener("input", async function () {
        input = email.value;
        warning = email.nextElementSibling;
        if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.trim())){
            warning.textContent = "email must be of type example@email.com";
        }
        else {
            const data = new FormData();
            data.append("email" ,input.trim());

            const response = await fetch("../api/form_validation/api_email.php", {
                method: "POST",
                body: data,
            });

            if(await response.json()){
                warning.textContent = "email is taken";
            }
            else{
                warning.textContent = "";
            }

        }
    });
}

function passwordEvent(password){
    password.addEventListener("input", function (){
        input = password.value;
        warning = password.nextElementSibling;
        if(input.trim().length < 9){
            warning.textContent = "password should have at least 9 characters";
        }
        else {
            warning.textContent = "";
        }
    });
}

function password2Event(password, password2){
    password2.addEventListener("input", function() {
        input = password.value;
        input2 = password2.value;
        warning = password2.nextElementSibling;
        if(input.trim() !== input2.trim()){
            warning.textContent = "passwords don't match";
        }
        else{
            warning.textContent = "";
        }
    })
}

function phoneEvent(phone) {
    phone.addEventListener("input", async function() {
        input = phone.value;
        warning = phone.nextElementSibling;
        if(!/^(?:9[1-36]\d|2[12]\d|2[35][1-689]|24[1-59]|26[1-35689]|27[1-9]|28[1-69]|29[1256])\d{6}$/.test(input.trim())){
            warning.textContent = "invalid phone number";
        }
        else {
            const data = new FormData();
            data.append("phone" ,input.trim());

            const response = await fetch("../api/form_validation/api_phone.php", {
                method: "POST",
                body: data,
            });    
            
            if(await response.json()){
                warning.textContent = "phone number is taken";
            }
            else {
                warning.textContent = "";
            }
        }
    });
}

function addressEvent(address){
    address.addEventListener("input", function () {
        input = address.value;
        warning = address.nextElementSibling;
        if(/[<>\"')(;\/#&]/.test(input.trim())){
            warning.textContent = "non-alphanumeric characters aren't allowed";
        }
        else {
            warning.textContent = "";
        }
    });
}

attachValidationEvents();