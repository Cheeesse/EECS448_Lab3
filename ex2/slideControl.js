document.addEventListener("DOMContentLoaded", () => {
    current = 0
    image = new Array, image[0] = "1.jpg", image[1] = "2.jpg", image[2] = "3.png", image[3] = "4.jpg", image[4] = "5.jpg"
    document.querySelector("#image").src = image[current]
    document.querySelector("#pre").addEventListener("click", () => {
        if (current == 0) {
            current = 4
        }
        else
            current -= 1
        document.querySelector("#image").src = image[current]
    })
    document.querySelector("#next").addEventListener("click", () => {
        if (current == 4) {
            current = 0
        }
        else
            current += 1
        document.querySelector("#image").src = image[current]
    })
})
