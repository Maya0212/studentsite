gsap.registerPlugin(ScrollTrigger);

gsap.set(".zindex-container", {
  perspective: 400,
  transformOrigin: "center center"
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zindex-container",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});
3


/* z 軸演出 */
tl.to(".section1", {
  z: 400,
  opacity: 0,
  duration: 3
})
  .to(".section2", {
    scale: 1,
    z: 100,
    opacity: 1,
    duration: 1
  })

  /* 👇 ここが肝 */
  .to(".zindex-container", {
    scale: 1,
    yPercent: -50,
    autoAlpha: 1,
    duration: 1,
    ease: "power2.inOut"
  })
// .to(".black-container", {
//   y: 0,
//   autoAlpha: 1,
//   duration: 1,
//   ease: "power2.out"
// }, "<"); 
// ← 完全同時

// 上に200px移動
// gsap.to(".section1 .title", {
//   y: -200,  
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

gsap.to(".section1 .subtitle", {
  y: -150,   // 上に150px移動
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// 

var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c = canvas.getContext('2d');

window.addEventListener('resize', function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  initCanvas();
})

var mouse = {
  x: undefined,
  y: undefined
}
window.addEventListener('mousemove',
  function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircles();
  }
)
window.addEventListener("touchmove",
  function (event) {
    let touch = event.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    drawCircles();
  }
)

function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.minRadius = radius;
  this.vx = vx;
  this.vy = vy;
  this.birth = birth;
  this.life = life;
  this.opacity = opacity;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.fillStyle = 'rgba(' + rgb + ',' + this.opacity + ')';
    c.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.opacity = 1 - (((frame - this.birth) * 1) / this.life);

    if (frame > this.birth + this.life) {
      for (let i = 0; i < circleArray.length; i++) {
        if (this.birth == circleArray[i].birth && this.life == circleArray[i].life) {
          circleArray.splice(i, 1);
          break;
        }
      }
    } else {
      this.draw();
    }
  }

}

var circleArray = [];

function initCanvas() {
  circleArray = [];
}

var colorArray = [
  '355,85,80',
  '9,80,100',
  '343,81,45'
]

function drawCircles() {
  for (let i = 0; i < 6; i++) {
    let radius = Math.floor(Math.random() * 4) + 2;
    let vx = (Math.random() * 2) - 1;
    let vy = (Math.random() * 2) - 1;
    let spawnFrame = frame;
    let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
    let life = 100;
    circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

  }
}

var frame = 0;
function animate() {
  requestAnimationFrame(animate);
  frame += 1;
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

initCanvas();
animate();

// paper



window.addEventListener("scroll", () => {
  const text = document.querySelector(".hero-text");
  const scroll = window.scrollY;

  const progress = Math.min(scroll / 400, 1);

  text.style.transform =
    `translate(-50%, calc(-50% + ${progress * 150}px))`;

  text.style.opacity = 1 - progress;
});