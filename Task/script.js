
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('Form submitted successfully!');
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const spanElement = document.querySelector('#home h1 span');    
    const text = "My Website";
    let index = 0; 
    let typingSpeed = 100; 
    let deletingSpeed = 50;
    let pauseTime = 2000; 
    let deleting = false;

    function typeWriter() {
        if (!deleting) {
            if (index < text.length) {
                spanElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } 
            else {
                setTimeout(function() {
                    deleting = true;  
                    setTimeout(typeWriter, 500);
                }, pauseTime);
            }
        } 
        else {
            if (index > 0) {
                spanElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, deletingSpeed);
            } 
            else {
                deleting = false;
                setTimeout(typeWriter, 500);
            }
        }
    }
    typeWriter();
});