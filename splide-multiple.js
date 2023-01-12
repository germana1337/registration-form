// splide

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 2,
  autoplay: true,
  interval: 2000,
});
splide.mount();

// Input Click Checked  //
let age1 = document.getElementById("age1");
let age2 = document.getElementById("age2");

age1.addEventListener("click", function () {
  age2.checked = false;
});

age2.addEventListener("click", function () {
  age1.checked = false;
});

let formRegistration = document.getElementById("form-registration");
formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let errorContainer = document.getElementById("error-container");

  // username

  let usernameField = document.getElementById("f-name").value;
  if (usernameField.length < 4) {
    errorContainer.textContent = "სახელი უნდა იყოს 4 ასოზე მეტი";
    errors.username = "სახელი უნდა იყოს 3 ასოზე მეტი";
  }

  if (usernameField == "") {
    errorContainer.textContent = "გთხოვთ ჩაწეროთ თქვენი სახელი";
    errors.username = "გთხოვთ ჩაწეროთ თქვენი სახელი";
  }

  let password1 = document.getElementById("pass1").value;
  let password2 = document.getElementById("pass2").value;

  if (password1 == "") {
    errorContainer.textContent = "პაროლის ველი ცარიელია";
    errors.mypassword = "პაროლის ველი ცარიელია";
  }

  if (password1 != password2) {
    errorContainer.textContent = "პაროლები არ ემთხვევა ერთმანეთს";
    errors.mypassword2 = "პაროლები არ ემთხვევა ერთმანეთს";
  }

  // checkbox

  let agree = document.getElementById("agree").checked;

  if (!agree) {
    let errorContainer = document.getElementById("error-container");
    errorContainer.textContent = "გთხოვთ დაეთანხმოთ წესებს და პირობებს";
    errors.agree = "გთხოვთ დაეთანხმოთ წესებს და პირობებს";
  }

  // radio
  let age = false;
  formRegistration.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });
  if (!age) {
    errors.age = "გთხოვთ მონიშნოთ თქვენი საშუალო ასაკი";
  }

  // Clear Inputs
  if (usernameField.length >= 4 && password1 === password2 && agree && age) {
    errorContainer.innerHTML = " ";
  }

  console.log(errors);
});
