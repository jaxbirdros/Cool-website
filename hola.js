const linkElements = document.querySelectorAll('.random-link');

function moveImagesRandomly() {
  linkElements.forEach((link) => {
    const maxX = window.innerWidth - link.clientWidth;
    const maxY = window.innerHeight - link.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    link.style.left = `${randomX}px`;
    link.style.top = `${randomY}px`;
  });
}

setInterval(moveImagesRandomly, 2000);
moveImagesRandomly();
