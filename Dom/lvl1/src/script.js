// console.log(document);
console.log(document.head);
console.log(document.body);

let accessName = document.body.getElementsByTagName("h1")
console.log(accessName);
accessName[accessName.length - 1].innerText = "restart";