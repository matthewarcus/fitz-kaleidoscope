const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new GlslCanvas(canvas, { fragmentString: frag })

const calcSize = function () {
  let ww = window.innerWidth
  let wh = window.innerHeight
  let dpi = window.devicePixelRatio

  canvas.width = ww * dpi
  canvas.height = wh * dpi
  canvas.style.width = ww + "px"
  canvas.style.height = wh + "px"
}

calcSize()

window.addEventListener("resize", function () {
  calcSize()
})


const images = ["images/herm.jpg", "images/breughel.jpg", "images/titian.jpg", "images/redon.jpg", "images/rembrandt.jpg", "images/demorgan.jpg"]
let current = 0    
canvas.addEventListener("click", function (event) {
    current = (current+1)%images.length;
    sandbox.setUniform("image", images[current]);
})

sandbox.setUniform("image", images[current])
