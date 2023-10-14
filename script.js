document.write("<body>")
let array = [{name : "Manette PS5", img : "Image1.jpg"}]
let n = parseInt( Math.random() * array.length)
while (isNaN(n)) {
  n = parseInt( Math.random() * array.length)
}

document.write("<img src='image/Image" + array[n] + "' alt='Image aléatoire'>");