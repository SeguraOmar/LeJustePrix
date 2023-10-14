let array  = [
    ['Manette PS5', 'Image1.jpg'],
    ['Watercooling Frozen Notte', 'Image2.jpg'],
    ['SSD NVME 1TO', 'Image3.jpg'],
    ["Ventilateur TL C-12 C-S", "Image4.jpg"],
    ["Boitier NZXT H5 FLOW", "Image5.jpg"]

  ]

document.getElementById("#tableau").innerHTML = array

  function photo() {
    let photo = document.querySelector('#tableau')
    photo.innerHTML=`<img src="image/Image${Math.floor((Math.random()* 5) + 1)}.jpg" alt="image article" >`
}

photo()