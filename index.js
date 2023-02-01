console.log("Login - Register project");

let name_ = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");

let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let contactAlert = document.getElementById("contactAlert");


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
                                    <h6>Please provide a proper name!</h6>
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
                                    <h6>Please provide a valid email address</h6>
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
                                    <h6>Please provide a valid Phone Number!</h6>
                                    <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }

});