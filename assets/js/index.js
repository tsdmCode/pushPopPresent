const arrKasse = document.getElementById('array');
const length = document.getElementById('length');
const memory = document.getElementById('memory');
const popBtn = document.getElementById('pop');
const pushBtn = document.getElementById('push');
let popped;
const arr = [45, 20, 600];

function updateArr() {
  arrKasse.innerText = arr.join(', ');
  length.innerText = `Længden på arrayet er: ${arr.length}`;
  memory.innerText = `Sidste poppede nummer er: ${popped || ''}`;
}

function pushNum() {
  const nytItem = prompt('Hvad vil du gerne tilføje?');
  console.log('Adding ' + nytItem);
  arr.push(nytItem);

  updateArr();
}

function popNum() {
  popped = arr.pop();
  console.log(popped);

  updateArr();
}

popBtn.addEventListener('click', popNum);
pushBtn.addEventListener('click', pushNum);

updateArr();
