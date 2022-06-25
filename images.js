const videos = []

for (let i = 1; i < 144; i++) {
    const image = `/content/imgs/img_(${i}).jpg`
    videos.push(image)
}

console.log(videos.length + "length")

while (videos.length != 0) {
    const image = videos[Math.floor(Math.random() * videos.length)]

    videos.splice(videos.indexOf(image), 1)

    console.log(videos.length)

    $(".images").append(`<img loading="lazy" src="${image}">`)
}