function drawTriangles() {
  // Get the height and symbol values from the input fields
  let height = parseInt(document.getElementById("height").value);
  let symbol = document.getElementById("symbol").value;

  // Draw the right triangle
  let triangle = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += symbol + " ";
    }
    triangle += row + "<br>";
  }

  // Display the triangle in the output div
  document.getElementById("output").innerHTML = triangle;
}
