const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You Clicked Me!")
    console.log("I hope it worked !!")
}

function scream() {
    console.log("AAAAHHHH");
    console.log("STOP touching Me!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked me')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
