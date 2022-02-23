document.querySelector('#freddy').onclick = freddy;
document.querySelector('#pinhead').onclick = pinhead;
document.querySelector('#leatherface').onclick = leatherface;
document.querySelector('#jason').onclick = jason;
document.querySelector('#chucky').onclick = chucky;
document.querySelector('#ghostface').onclick = ghostface;
document.querySelector('#saw-guy').onclick = saw;
document.querySelector('#leprechaun').onclick = lephracaun;
document.querySelector('#alien').onclick = alien;
document.querySelector('#predator').onclick = predator;

let style = (document.querySelector('#show-img').style.color = 'red');

function freddy(e) {
  console.log(e.target);

  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/freddyphoto.jpeg" alt="">`;
}

function pinhead() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/pinheadphoto.jpeg">`;
}

function leatherface(e) {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  console.log('clicked');
  document.querySelector('#show-img').textContent = 'Leatherface';
}
function jason() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'jason';
}
function chucky() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'chucky';
}

function ghostface() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'ghost face';
}

function saw() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'Saw';
}
function lephracaun() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'Lepracaun';
}
function alien() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'Alien';
}
function predator() {
  // document.querySelector('#show-img').style.color = 'red';
  style = style;
  document.querySelector('#show-img').textContent = 'Predator';
}
