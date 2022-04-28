const input = document.querySelector("#country-input");
const list = document.querySelector("#list");
const count = document.querySelector("#count");

// Add user input (country) to list
const addItem = (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    let country = input.value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(country));
    list.appendChild(li);
    updateCount();
  }
};

// Update the country count (0/195)
const updateCount = () => {
  count.innerHTML = `${list.childElementCount}/195`;
};

document.querySelector("#submit").addEventListener("click", addItem);

// Add a scroll on the list of longer than page so input is always at top
// Add an array with all 195 countries
// Add functionality to check button (check list against array)
