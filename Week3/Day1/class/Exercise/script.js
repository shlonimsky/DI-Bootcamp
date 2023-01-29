// access the div
const firstDiv = document.body.firstElementChild;
const firstDivSecondWay = document.body.children[0];

// access the ul
const list = document.body.children[1];
const listOtherWay = firstDiv.nextElementSibling; //sibling of the div accessed above

//second li
const secondLi = list.lastElementChild; //last child of the ul accessed above;
const secondLiOtherWay = list.children[1];