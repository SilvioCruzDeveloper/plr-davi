// script.js
document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector(".video-container iframe");
    var button = document.getElementById("end-button");
  
    video.addEventListener("ended", function() {
      button.style.display = "block";
    });
  });
  