let id;

function createDraggable() {
  let span = document.createElement('span');
  span.id = 'hola-mundo';
  span.innerText = 'Arastrable';
  span.draggable = true;
  span.ondragstart = e => {
    id = e.target.id;
  }
  return span;
}

function createDropppableArea() {
  let dropArea = document.createElement('div');
  dropArea.className = 'drop';
  dropArea.ondragenter = e => {
    e.target.style.background = 'yellow';
  }

  dropArea.ondragleave = e => {
    e.target.style.background = '';
  }

  dropArea.ondragover = e => e.preventDefault(); // prevenir el comportamiento por defecto
  // ya que no agregaba el elemneto span

  dropArea.ondrop = e => {
    e.target.appendChild(document.getElementById(id));
  }

  return dropArea;
}


let draggable = createDraggable();
let dropArea1 = createDropppableArea();
let dropArea2 = createDropppableArea();
document.body.append(draggable);
document.body.append(dropArea1);
document.body.append(dropArea2);


