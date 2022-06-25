const videos = []

for (let i = 1; i < 6; i++) {
    const video = `/content/vids/vid_(${i}).mp4`
    videos.push(video)
}

console.log(videos.length + "length")

while (videos.length != 0) {
    const video = videos[Math.floor(Math.random() * videos.length)]

    videos.splice(videos.indexOf(video), 1)

    console.log(videos.length)

    console.log(video)

    $(".videos").append(`<video controls><source src="${video}">Your browser does not support videos</video>`)
}