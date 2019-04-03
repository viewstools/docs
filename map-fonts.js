let weights = {
  Thin: 100,
  Light: 200,
  Regular: 300,
  Medium: 400,
  Semibold: 500,
  Bold: 600,
  Extrabold: 700,
  Black: 800,
}
let weightsKeys = Object.keys(weights)

let fs = require('fs')
let path = require('path')

let fonts = fs.readdirSync(process.argv[2])
fonts.forEach(oldFile => {
  let file = path.basename(oldFile)

  let weight = weightsKeys.find(weight => file.includes(weight))

  file = file.replace(weight, weights[weight]).replace('Italic', '-italic')

  fs.copyFileSync(
    path.join(process.argv[2], oldFile),
    path.join(process.argv[3], file)
  )
})
