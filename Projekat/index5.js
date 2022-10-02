const Username = document.getElementById("nameEng");
const email = document.getElementById("emailEng");
const phone = document.getElementById("pfoneEng");
const date = document.getElementById("dateEng");
const time = document.getElementById("timeEng");
const people = document.getElementById("peopleEng");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const setEror = (element, massage) => {
  const inputControl = element.parentElement;
  const erorDisplay = inputControl.querySelector(".eror");
  erorDisplay.innerText = massage;
  inputControl.classList.add("eror");
  inputControl.classList.remove("sucess");
};
const setSucess = (element) => {
  const inputControl = element.parentElement;
  const erorDisplay = inputControl.querySelector(".eror");
  erorDisplay.innerText = "";
  inputControl.classList.remove("eror");
  inputControl.classList.add("sucess");
};
const isValidEmail = (email) => {
  const re = new RegExp("[a-z0-9]+@[a-z]+.[a-z]");
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const nameValue = Username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const dateValue = date.value.trim();
  const timeValue = time.value.trim();
  const peopleValue = people.value.trim();
  if (nameValue === "") {
    setEror(Username, "Username is required");
  } else {
    setSucess(Username);
  }

  if (emailValue === "") {
    setEror(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setEror(email, "Provide a valid email address");
  } else {
    setSucess(email);
  }

  if (phoneValue === "") {
    setEror(phone, "Phone is required");
  } else {
    setSucess(phone);
  }

  if (dateValue === "") {
    setEror(date, "Date is required");
  } else {
    setSucess(date);
  }

  if (timeValue === "") {
    setEror(time, "Time is required");
  } else {
    setSucess(time);
  }

  if (peopleValue === "" || peopleValue < 1) {
    setEror(people, "People is required");
  } else {
    setSucess(people);
  }
};
