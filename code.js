function update(source, altText) {
    document.getElementById('gallery-info').style.backgroundImage = `url(${source})`;
    document.getElementById('image-source').textContent = `Image Source: ${source}`;
    document.getElementById('image-alt').textContent = `Alt Text: ${altText}`;
}

function reset() {
    document.getElementById('gallery-info').style.backgroundImage = 'none';
    document.getElementById('image-source').textContent = '';
    document.getElementById('image-alt').textContent = '';
}
