Typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('FrontEnd Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Freelancer')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .start();

const animatedHeading = document.querySelector('.animated-heading');
const animatedHeading2 = document.querySelector('.animated-heading2');

function startAnimation1() {
    animatedHeading.style.animationDelay = '0.5s'; // Delay the animation start by 0.5 seconds
    animatedHeading.classList.add('fadeIn');
}

function startAnimation2() {
    animatedHeading2.style.animationDelay = '0.5s'; // Delay the animation start by 0.5 seconds
    animatedHeading2.classList.add('fadeIn');
}
window.onload = startAnimation1;
window.onload = startAnimation2;
const submitBtn = document.getElementById('submit-btn');
const validate = (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    if (username.value === "") {
        alert("Please enter your username.");
        username.focus();
        return false;
    }

    if (email.value === "") {
        alert("Please enter your email address.");
        emailAddress.focus();
        return false;
    }

    if (!emailIsValid(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }
    return true; // Can submit the form data to the server
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
submitBtn.addEventListener('click', validate);
