// script.js
document.getElementById("add-phone-btn").addEventListener("click", function() {
    // Get the container where phone number fields are located
    const phoneNumbersContainer = document.getElementById("phone-numbers");

    // Get the current number of phone fields
    const phoneFields = document.querySelectorAll(".phone-number-field").length;

    // Create a new phone number input field
    const newPhoneNumberField = document.createElement("div");
    newPhoneNumberField.classList.add("phone-number-field");

    // Create a new label for the new phone number input field
    const label = document.createElement("label");
    label.setAttribute("for", `phone-number-${phoneFields + 1}`);
    label.textContent = `Phone Number ${phoneFields + 2}:`;

    // Create a new input field
    const input = document.createElement("input");
    input.setAttribute("type", "tel");
    input.setAttribute("id", `phone-number-${phoneFields + 1}`);
    input.setAttribute("name", `phone-number-${phoneFields + 1}`);
    input.setAttribute("pattern", "^[0-9]{10}$");
    input.required = true;

    // Append label and input to the new phone number field
    newPhoneNumberField.appendChild(label);
    newPhoneNumberField.appendChild(input);

    // Append the new phone number field to the container
    phoneNumbersContainer.appendChild(newPhoneNumberField);
});
