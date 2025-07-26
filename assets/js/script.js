// GLOBALLY GETS BOTH PWD VISIBILITY ICONS INTO const eyeIcons
const eyeIcons = [
    document.getElementById("password-show"), 
    document.getElementById("password-hide")
]

// GLOBALLY GETS password-input AND password-hide ELEMENTS
const passwordInput = document.getElementById("password-input");
const passwordHide = document.getElementById("password-hide");

// ADDS GLOBAL CLICK LISTENER FOR PWD VISIBILITY ICONS
eyeIcons.forEach(icon => {
    icon.addEventListener('click', () => {

        // TOGGLE VISIBILITY OF BOTH ICONS
        eyeIcons.forEach(icon => {
            icon.classList.toggle("hidden");
        });

        // TOGGLE PASSWORD VISIBILITY
        if (passwordHide.classList.contains("hidden")) {
            passwordInput.type="text";
        } else {
            passwordInput.type="password";
        }

    });
});