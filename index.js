const addItem = (e) => {
  e.preventDefault();
  console.log("add an item");
};

document.querySelector("#submit").addEventListener("click", addItem);

// Get the input typed and add it to the ol
// Add a scroll on the list of longer than page so input is always at top
// Add an array with all 195 countries
// Add functionality to check button (check list against array)
