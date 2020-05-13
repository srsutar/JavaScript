// Acitvity 3.2/3.3--------------------------------------------------------

// from data.js
var alienData = data;
console.log("alienData", alienData)
// Get a reference to the table body
var tbody = d3.select("tbody");
// Use d3 to update each cell's text with ufo sighting data
// (date_time, city, state, country, shape, durationMinutes, comments)
alienData.forEach(function(ufoReport) {
//   console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {

    // Append a cell to the row for each value in the alien report object
    var cell = row.append("td");
    cell.text(value);
  });
});
// Activity 3.9-------------------------------------------------------------
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select(".form-group");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    var FilterData = alienData.filter(date => date.datetime === inputValue);
    console.log("FilterData", FilterData)
    // Use d3 to update each cell's text with ufo sighting data
    // (date_time, city, state, country, shape, Minutesduration, comments)
    // remove any children from the table
    tbody.html("");
    FilterData.forEach((alienReport) => {
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
}
