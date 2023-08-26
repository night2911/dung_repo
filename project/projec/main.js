        // w3
        
        // Get the video
        var video = document.getElementById("video");
        
        // Get the button
        var btn = document.getElementById("myBtn");
        
        // Pause and play the video, and change the button text
        function myFunction() {
          if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
          } else {
            video.pause();
            btn.innerHTML = "Play";
          }
        }


        // stack overflow


        const video = document.querySelector('video')
const source = document.querySelector('source')

video.appendChild(source)
video.play()

const changeVideoButton = document.querySelector('#changeVideo')
changeVideo.addEventListener('click', e => {
  video.pause()
  
  source.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')
  
  video.load()
  video.play()
})