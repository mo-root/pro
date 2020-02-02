
/* View in fullscreen */
function openFullscreen() {

  console.log("v4");
  console.log("requesting full screen");

  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
  function start() {
    console.log("start");
    openFullscreen();

    document.getElementById("start").style.opacity = 0;
    document.getElementById("Video").play();
    document.getElementById('my').load();


  }
