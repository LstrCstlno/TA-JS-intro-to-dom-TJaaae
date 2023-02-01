/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)


*/

function createInputElm(label, type = "text") {
  let inputEle = document.createElement("input")
  inputEle.type = type
  let labelEle = document.createElement("label")
  labelEle.innerText = label + ":"
  labelEle.append(inputEle)
  return labelEle
}

// TEST
// createInputElm('Your name'); //<label>Your name: <input type="text"></label>
// createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
// createInputElm('Your name'); //<label>Your name: <input type="text"></label>
// createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

// TEST
// createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
// createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// function createList(array) {
//   let parentul = document.createElement("ul")
//   for (let i = 0; i < array.length; i++) {
//     let li = document.createElement("li")
//     li.innerText = array[i]
//     parentul.append(li)
//   }
//   return parentul
// }

function createList(array) {
  let parentul = document.createElement("ul")
  array.forEach((ele) => {
    let li = document.createElement("li")
    li.innerText = ele
    parentul.append(li)
  })
  return parentul
}

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(array) {
  let unlist = document.createElement("ul")
  array.forEach((ele) => {
    let list = document.createElement("li")
    let para = document.createElement("p")
    para.innerText = ele.name
    let inp = document.createElement("input")
    inp.type = "checkbox"
    inp.checked = ele.isDone
    inp.id = ""
    let spa = document.createElement("span")
    spa.innerText = "X"
    list.append(para,inp,spa)
    unlist.append(list)
  })
  return unlist
}

TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);

createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
