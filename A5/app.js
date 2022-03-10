var state = 'hidden'; // state can equal to hidden or shown
function hideImage(elem) {
    elem.style.display = 'none';
}

function showImage(elem) {
    elem.style.display = 'inline-block';
}

document.getElementById('main-body').addEventListener('click', (event) => {
    var imgContainer = document.getElementById('image-container');
    var imgHeight = document.getElementById('my-image').getAttribute('height');
    var imgWidth = document.getElementById('my-image').getAttribute('width');
    if (state === 'hidden') {
        imgContainer.style.top = `${event.y - parseInt(imgHeight / 2)}px`;
        imgContainer.style.left = `${event.x - parseInt(imgWidth / 2)}px`
        showImage(imgContainer);
        state = 'shown';
    } else { // state === 'shown'
        hideImage(imgContainer);
        state = 'hidden';
    }
});