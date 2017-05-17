var canvas = document.getElementById('sky');
var ctx = canvas.getContext('2d');

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var moon = new Image();
  var cloud1 = new Image();
  var cloud2 = new Image();
  var cloud3 = new Image();
  var plane = new Image();

  moon.src = 'img/moon.png';
  cloud1.src = 'img/cloud1.png';
  cloud2.src = 'img/cloud2.png';
  cloud3.src = 'img/cloud3.png';
  plane.src = 'img/plane.png';

  window.addEventListener('load', function() {
    cloud1x = -300;
    cloud2x = canvas.width * .66;
    cloud3x = canvas.width * .33;
    planex = canvas.width + 200;
    planey = canvas.height * .6;
    moonx = canvas.width * .1;
    moony = canvas.height + 50;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(moon, moonx, moony);
      ctx.drawImage(cloud3, cloud3x, canvas.height * .75);
      ctx.drawImage(cloud2, cloud2x, canvas.height * .45);
      ctx.drawImage(plane, planex, planey);
      ctx.drawImage(cloud1, cloud1x, canvas.height * .1);

      if (cloud1x > canvas.width + 400) {
        cloud1x = -350;
      } else {
        cloud1x = cloud1x + .9;
      }

      if (cloud2x > canvas.width + 400) {
        cloud2x = -200;
      } else {
        cloud2x = cloud2x + .5;
      }

      if (cloud3x > canvas.width + 400) {
        cloud3x = -150
      } else {
        cloud3x = cloud3x + .3;
      }

      if (planex < -1500) {
        planex = canvas.width + 200;
        planey = canvas.height * .6;
      } else {
        planex--;
        planey = planey - 0.5;
      }

      if (moony < -100) {
        moonx = canvas.width * .1;
        moony = canvas.height + 50;
      } else {
        moony = moony - .1;
        moonx = moonx + .03;
      }
      setTimeout(function() {
        requestAnimationFrame(animate);
      }, 10);
    }
    requestAnimationFrame(animate);
  });
}

initCanvas();
