// CONTACT FORM

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",
async function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    const data = {

        name,
        email,
        message
    };

    try{

        const response = await fetch(
            "http://localhost:5000/contact",

            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)
            }
        );

        const result = await response.text();

        alert(result);

        contactForm.reset();

    }

    catch(error){

        alert("Error Sending Message");
    }

});


// ACTIVE NAVBAR

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");
        }

    });

});


// TYPING EFFECT

const text = [

    "Full Stack Developer",

    "AWS Cloud Learner",

    "CSE Student",

    "Web Developer"
];

let speed = 100;

const textElement =
document.querySelector(".hero h2");

let textIndex = 0;

let charIndex = 0;

function typeWriter(){

    if(charIndex < text[textIndex].length){

        textElement.innerHTML +=
        text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);
    }

    else{

        setTimeout(eraseText, 1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        textElement.innerHTML =
        text[textIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(eraseText, 50);
    }

    else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;
        }

        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;