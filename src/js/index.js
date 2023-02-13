import "./../styles/index.scss"

// import './partials/noise.js';
import "./partials/noise.js";
import Splitting from 'splitting';
import ScrollOut from 'scroll-out'


function getRandom() {
    return Math.random() * 255;
}

function render() {
    const documentHeight = document.body.scrollHeight;
    let imageData = ctx.createImageData(ctx.canvas.width, documentHeight);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const color = getRandom();
        imageData.data[i]     = color;
        imageData.data[i + 1] = color;
        imageData.data[i + 2] = color;
        imageData.data[i + 3] = 255;
	}
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(render);
}
function updateCanvasSize() {

    const documentHeight = document.body.scrollHeight;
    ctx.canvas.height = documentHeight;
    ctx.canvas.width  = canvas.offsetWidth;
}

function generateNoise () {
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    render();
}


document.addEventListener("DOMContentLoaded", function(){
    console.log("DOMContentLoaded")
    document.getElementById('logo').play();

    // window.canvas = document.getElementById('noisy-canvas');
    // window.ctx = canvas.getContext('2d');
    // generateNoise();

    document.querySelector(".arrow-link").addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 2000,
            behavior: 'smooth'
          });
    });

    
    Splitting();
    ScrollOut({
        targets: ['#second_scene'],
        onShown: function(el) {
            console.log("onShown")
            document.querySelector('.arrow-link').classList.remove("show");
            window.scrollTo({
                left: 0,
                top: 2000,
                behavior: 'smooth'
              });
        },
        onHidden: function(el) {
            console.log("onHidden")
            document.querySelector('.arrow-link').classList.add("show");
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
              });
        },
    })
});
