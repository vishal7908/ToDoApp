let addFrm = document.addfrm; // in form tag we can directly access the reference of the tag with their name
let text = addFrm.add;
let ul = document.querySelector(".todos");
let addItem = (item) => {
  let str = `<li>
          <span> ${item}</span>
          <i class="fa-solid fa-trash delete"></i>
        </li>`;

  ul.innerHTML += str;
};

addFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

// concept event deligation
ul.addEventListener("click", (e) => {
  // check weather the clicked item is I tag ?
  if (e.target.nodeName === "I") {
    // if yes Remove parent of i tag i.e entire <li>
    e.target.parentElement.remove();
  }
});
let searchItem = (text) => {
  // console.log("Text Recived: " + text);
  let listItems = ul.children; // from this line of code we can recive all the list items in form of html collction.
  for (let li of listItems) {
    if (li.innerText.toLowerCase().indexOf(text) === -1) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
};
let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});
