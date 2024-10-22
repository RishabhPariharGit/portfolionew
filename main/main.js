document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been submitted!");
});


// video hover scripting start 

    const video = document.querySelector('.responsive-video');

    // Play video on hover
    video.addEventListener('mouseenter', function() {
        video.play();
    });

    // Pause video when hover ends
    video.addEventListener('mouseleave', function() {
        video.pause();
    });

    // video scripting end
