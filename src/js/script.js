const imgBanner = [
    "./src/assets/imagem1.jpg",
    "./src/assets/imagem2.jpg",
    "./src/assets/imagem3.jpg",
]

const campoBanner = document.getElementById("banner")
let i = 0

function slideShow() {
    campoBanner.src = imgBanner[i]
    i++
    if (i == imgBanner.length) {
        i = 0;
    }
    setTimeout(slideShow, 2000);
}

slideShow()