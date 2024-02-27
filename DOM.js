function addImage() {
  let image = happyImages.imgSrc.value;
  if (image == '') {
    alert('image url must be provided!');
    return false;
  }
  let div = document.getElementById('Images');
  let img = document.createElement('img');
  img.src = image;
  div.appendChild(img);
  return false;
}
