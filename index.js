//Create a prompt funtion that alllows the customer to put in the flavors they prefer
document.getElementById('submit-button').addEventListener('click', function() {
  // Get user input (froyo flavors)
  const userInput = document.getElementById('froyo-flavors').value;

  // Create an array from the input string (splitting by commas and trimming extra spaces)
  const flavorsArray = userInput.split(',').map(flavors => flavors.trim());

  // Create an object to track the count of each flavor
  const flavorCount = {};  // Initialize the object here

  // Iterate through the array and update the object with flavor counts
  flavorsArray.forEach(flavor => {
    if (flavor) {  // Add a check to avoid counting empty strings
      if (flavorCount[flavor]) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    }
  });

  // Output the result in the console (in a table format)
  console.table(flavorCount);
});


//correctly count the number of times a flavor in the users input


///CHECK! logic for the array is organized, names are consistent, and the console changes depending on the input