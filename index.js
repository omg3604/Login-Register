console.log("Login - Register project");

let name_ = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let contactAlert = document.getElementById("contactAlert");
let pass1Alert = document.getElementById("pass1Alert");
let pass2Alert = document.getElementById("pass2Alert");


const validName = /^[a-zA-Z ]{2,30}$/;
name_.addEventListener('blur', function (e) {
    e.preventDefault();
    if (validName.test(name_.value)) {
        name_.classList.remove("is-invalid");
        nameAlert.innerHTML = ``;
    }
    else {
        name_.classList.add("is-invalid");
        nameAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <small>Please provide a proper name!</small>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }

});

const validemail = /^([a-zA-Z0-9]{2,30})@([a-z]{3,7}).([a-z]{2,7})$/;
email.addEventListener('blur', function (e) {
    e.preventDefault();
    if (validemail.test(email.value)) {
        email.classList.remove("is-invalid");
        emailAlert.innerHTML = ``;
    }
    else {
        email.classList.add("is-invalid");
        emailAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <small>Please provide a valid email address</small>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }

});

const validcontact = /^[6-9]{1}[0-9]{8,9}$/;
contact.addEventListener('blur', function (e) {
    e.preventDefault();
    if (validcontact.test(contact.value)) {
        contact.classList.remove("is-invalid");
        contactAlert.innerHTML = ``;
    }
    else {
        contact.classList.add("is-invalid");
        contactAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <small>Please provide a valid Phone Number!</small>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }
});

const validpass1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
pass1.addEventListener('blur', function (e) {
    e.preventDefault();
    if (validpass1.test(pass1.value)) {
        pass1.classList.remove("is-invalid");
        pass1Alert.innerHTML = ``;
    }
    else {
        pass1.classList.add("is-invalid");
        pass1Alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <small>Password must contain minimum eight characters, at least one letter, one number and one special character:!</small>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }
});

pass2.addEventListener('blur', function (e) {
    e.preventDefault();
    if (pass2.value == pass1.value) {
        pass2.classList.remove("is-invalid");
        pass2Alert.innerHTML = ``;
    }
    else {
        pass2.classList.add("is-invalid");
        pass2Alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <small>Confirmed password does not match!</small>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }
});
