function createList_DOM (sourceObj) {
  let ul = document.createElement('ul');
  for (let key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
      let li = document.createElement('li');
      li.textContent = key;
      if (typeof sourceObj[key] === 'object') {
        li.insertBefore(createList_DOM(sourceObj[key]), null);
      }
      ul.insertBefore(li, null);
    }
  }
  return ul;
}

function createList_innerHTML (sourceObj) {
  if (typeof sourceObj !== 'object' || Object.keys(sourceObj).length === 0) return '';
  let list = '<ul>';
  for (let key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
      list += `<li>${key}${createList_innerHTML(sourceObj[key])}</li>`;
    }
  }
  list += '</ul>';

  return list;
}

function createTree1 (container, object) {
  if (container) {
    container.insertBefore(createList_DOM(object), null);
  }
}

function createTree2 (container, object) {
  if (container) {
    container.innerHTML = createList_innerHTML(object);
  }
}

let listObject = {
  firstLi: {
    one: '',
    two: '',
    three: ''
  },
  secondLi: '',
  thirdLi: ''
};

// First variant with DOM
let container = document.createElement('div');
container.id = 'container';
document.body.insertBefore(container, null);
createTree1(container, listObject);

// Second variant with innerHTML
let container2 = document.createElement('div');
container2.id = 'container2';
document.body.insertBefore(container2, null);
createTree2(container2, listObject);