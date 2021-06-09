const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(res.data[0].show.image.medium);
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

function clearImages() {
    const images = document.querySelectorAll('img');
    for (let img of images) {
        img.remove();
    }
}