const input = document.querySelector("#country-input");

const addItem = (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    let country = input.value;
    console.log(country);
  }
};

document.querySelector("#submit").addEventListener("click", addItem);

// Get the input typed and add it to the ol
// Add a scroll on the list of longer than page so input is always at top
// Add an array with all 195 countries
// Add functionality to check button (check list against array)
