const arrKasse = document.getElementById('array');
const length = document.getElementById('length');
const memory = document.getElementById('memory');
const popBtn = document.getElementById('pop');
const pushBtn = document.getElementById('push');
let popped;

const arr = [45, 20, 600];

function updateArr() {
  //den her funktion opdaterer bare hjemmesiden efter vi har trykket på knappen
  arrKasse.innerText = arr.join(', ');
  length.innerText = `Længden på arrayet er: ${arr.length}`;
  memory.innerText = `Sidste poppede nummer er: ${popped || ''}`;
}

function pushNum() {
  const nytItem = prompt('Hvad vil du gerne tilføje?'); //her tager vi brugerens input (det var egentlig et random tal i starten)
  console.log('Tilføjer ' + nytItem);
  arr.push(nytItem); //her tager vi brugerens input fra nytitem og "lægger det til" vores array

  updateArr();
}

function popNum() {
  popped = arr.pop(); //den her linje kigger bare på den sidste ting i vores array, fjerner det, og gemmer det til senere brug
  console.log(popped);

  updateArr();
}

popBtn.addEventListener('click', popNum);
pushBtn.addEventListener('click', pushNum);

updateArr();
