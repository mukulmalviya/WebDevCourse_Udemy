const button = document.querySelector('button');
const h1 = document.querySelector('h1');


button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    h1.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    // if (r + g + b <= 300) {
    //     h1.style.color = 'white';
    // }
    // else {
    //     h1.style.color = 'black';
    // }
    return `rgb(${r},${g},${b})`;
}