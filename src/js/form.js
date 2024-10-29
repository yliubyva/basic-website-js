"use strict";

function handleSubmit(event) {
  event.preventDefault();

  const nameInputElement = document.getElementById("name");
  const emailInputElement = document.getElementById("email");
  const nameErrorElement = document.getElementById("nameError");
  const emailErrorElement = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  nameErrorElement.textContent = "";
  emailErrorElement.textContent = "";

  if (nameInputElement.value.trim() === "") {
    nameErrorElement.textContent = "Name is required.";
  } else if (nameInputElement.value.length < 2) {
    nameErrorElement.textContent = "Name must be at least 2 characters long.";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInputElement.value.trim() === "") {
    emailErrorElement.textContent = "Email is required.";
  } else if (!emailPattern.test(emailInputElement.value)) {
    emailErrorElement.textContent = "Please enter a valid email address.";
  }
}

export { handleSubmit };