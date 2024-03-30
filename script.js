document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var imageBox = document.getElementById("imageBox");
    var textBox = document.getElementById("textBox");
    var imageBoxPosition = imageBox.getBoundingClientRect().top;
    var textBoxPosition = textBox.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (imageBoxPosition < windowHeight / 1.2) {
      imageBox.classList.add("animate");
    }

    if (textBoxPosition < windowHeight / 1.2) {
      textBox.classList.add("animate");
    }
  });
});

