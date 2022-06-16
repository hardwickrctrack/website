const images = []

for (let i = 1; i < 144; i++) {
    const image = `/content/imgs/img_(${i}).jpg`
    images.push(image)
}

console.log(images.length + "length")

while (images.length != 0) {
    const image = images[Math.floor(Math.random() * images.length)]

    images.splice(images.indexOf(image), 1)

    console.log(images.length)

    $(".images").append(`<img loading="lazy" src="${image}">`)
}