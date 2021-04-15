const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new GlslCanvas(canvas, { fragmentString: frag })

const calcSize = function () {
  let ww = window.innerWidth
  let wh = window.innerHeight
  let dpi = window.devicePixelRatio

  let s = Math.max(wh, ww + 200)

  canvas.width = ww * dpi
  canvas.height = wh * dpi
  canvas.style.width = canvas.width + "px"
  canvas.style.height = canvas.height + "px"
}

calcSize()

window.addEventListener("resize", function () {
  calcSize()
})


const images = ["images/herm.jpg", "images/breughel.jpg", "images/titian.jpg", "images/redon.jpg", "images/rembrandt.jpg", "images/demorgan.jpg"]
let current = 0    

canvas.addEventListener("click", function () {
  current += 1

  if (current >= images.length) {
    current = 0
  }

  sandbox.setUniform("image", images[current])
})

sandbox.setUniform("image", images[current])
