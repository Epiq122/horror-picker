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
  document.querySelector('#title').textContent = 'Freddy Krueger';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/freddyphoto.jpeg" alt="">`;
}

function pinhead() {
  document.querySelector('#title').textContent = 'Pinhead';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/pinheadphoto.jpeg">`;
}

function leatherface(e) {
  document.querySelector('#title').textContent = 'Leatherface';
  style = style;
  console.log('clicked');
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/leatherfacephoto.jpeg">`;
}
function jason() {
  document.querySelector('#title').textContent = 'Jason Voorhees';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/jasonphoto.jpeg">`;
}
function chucky() {
  document.querySelector('#title').textContent = 'Chucky';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/chuckyphoto.jpeg">`;
}

function ghostface() {
  document.querySelector('#title').textContent = 'Ghostface';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/ghostfacephoto.jpeg">`;
}

function saw() {
  document.querySelector('#title').textContent = 'Billy the Puppet';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/saw2.jpeg">`;
}
function lephracaun() {
  document.querySelector('#title').textContent = 'Leprechaun';

  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/lepphoto.jpeg">`;
}
function alien() {
  document.querySelector('#title').textContent = 'Xenomorph';
  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/alienphoto.jpeg">`;
}
function predator() {
  document.querySelector('#title').textContent = 'Predator';

  style = style;
  document.querySelector(
    '#show-img'
  ).innerHTML = `<img src="./images/predatorphoto.jpeg">`;
}
