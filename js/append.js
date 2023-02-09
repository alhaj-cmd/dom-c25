const appendList =document.getElementById('selectorAll');
const li = document.createElement('li');
// console.log(li);
li.innerText='tumi amr hote paro nai';
appendList.appendChild(li);

const maindiv = document.getElementById('main-content');
const sectionClass = document.createElement('section');
// console.log(sections);
const sectionHead = document.createElement('h1');
sectionHead.innerText ='This is true method';
sectionClass.appendChild(sectionHead);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'ami box a bondi';
ul.appendChild(li1);

maindiv.appendChild(ul);

maindiv.appendChild(sectionClass);