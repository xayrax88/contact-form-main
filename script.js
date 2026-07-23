let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let emailInput = document.getElementById('email');
let generalInput = document.getElementById('generalEnquiry');
let supportInput = document.getElementById('supportRequest');
let messageBoxInput = document.getElementById('message');
let checkBox = document.getElementById('checkBox');
let submitBtn = document.getElementById('submitButton');

//Error Elements
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const queryError = document.getElementById("queryError");

//Helper Functions
function showError(inputElement, errorElement, message) {
    inputElement.classList.add("error");
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
}
function showSuccess(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = "";
    errorElement.classList.add("hidden")
}


//Validation
function validateFirstName() {
    const firstNameValue = firstNameInput.value.trim();

    if (firstNameValue === "") {
        showError(
            firstNameInput,
            firstNameError,
            "This field is required"
        )
        return false;
    } else {
        showSuccess(firstNameInput, firstNameError);

        return true;
    }
}

function validateLastName() {
    const lastNameValue = lastNameInput.value.trim();

    if (lastNameValue === "") {
        showError(
            lastNameInput,
            lastNameError,
            "This field is required"
        )
        return false;
    } else {
        showSuccess(lastNameInput, lastNameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        showError(
            emailInput,
            emailError,
            "Email is required"
        );
        return false;
    }
    else if (!emailValue.includes("@")) {
        showError(
            emailInput,
            emailError,
            "Please enter a valid email"
        );
        return false;
    }
    else {
        showSuccess(emailInput, emailError);
        return true;
    }


}

function validateQuery() {
    const querySelected =
        generalInput.checked || supportInput.checked
    // const generalSelected = generalInput.checked;
    // const supportSelected = supportInput.checked;

    if (!querySelected) {
        queryError.textContent = "Please select a query type."
        queryError.classList.remove("hidden")
        return false;
    } else {
        queryError.textContent = "";
        queryError.classList.add("hidden")
    }
}

function validateMessage() {
    const messageValue = messageBoxInput.value.trim();

}

//Handle Submit
function handleSubmit(e) {
    e.preventDefault();
    const firstNameValid = validateFirstName();
    const lastNameValid = validateLastName();
    const emailValid = validateEmail();
    const queryValid = validateQuery();

    if (firstNameValid && lastNameValid && emailValid && queryValid) {
        alert(`
        Message Sent!
        Thanks for completing the form. We'll be in touch soon!
        `)
        console.log("The form was completed");
    }
}
submitBtn.addEventListener("click", handleSubmit);