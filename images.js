let path = "/content/imgs/"

const amounts = {
    "undated": 144,
    "03.07.22": 421,
    "26.06.22": 155
}

if (window.location.hash === "#undated") {
    path += "undated"
} else {
    path += window.location.hash.substring(1, window.location.hash.length)
}

console.log(path)

const images = []

for (let i = 1; i < amounts[window.location.hash.substring(1, window.location.hash.length)]; i++) {
    const image = `${path}/img_(${i}).jpg`
    images.push(image)
}

console.log(images.length + "length")

while (images.length != 0) {
    const image = images[Math.floor(Math.random() * images.length)]

    images.splice(images.indexOf(image), 1)

    $(".images").append(`<img loading="lazy" src="${image}">`)
}