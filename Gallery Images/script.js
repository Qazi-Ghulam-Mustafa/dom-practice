var galleryArray = [
    "https://media.licdn.com/dms/image/v2/D4D12AQEKiIL1VoEa1A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684499786521?e=2147483647&v=beta&t=tkcrimXXoyUNIXBpOcvIGm-skPMURb6PmHhkG9fHlFU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidb5E1vPgcfxmaWF6GVSxqehSoICzbp1j6Q&s",
    "https://www.shutterstock.com/image-photo/1-dollar-note-isolated-on-600nw-2555540875.jpg",
    "https://matchlesstravels.com/ht/images/7abe905adf02c849f94a5bab1953a92f.jpg",
    "https://i.ytimg.com/vi/zEr-mm8OSGo/sddefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s",

]

// Get ids
var image = document.getElementById("image")
var previous = document.getElementById("previous")
var next = document.getElementById("next")

var currentIndex = 0;

function nextBtn() {
    currentIndex = currentIndex + 1;
    image.src = galleryArray[currentIndex]
    if (currentIndex == galleryArray.length - 1) {
        next.style.display = "none"
    }
    if (currentIndex > 0) {
        previous.style.display = "inline"
    }
}

function previousBtn() {
    currentIndex = currentIndex - 1;
    image.src = galleryArray[currentIndex]
    if (currentIndex < 5) {
        previous.style.display = "inline"
    }
    if (currentIndex == 0) {
        previous.style.display = "none"
    }
}

