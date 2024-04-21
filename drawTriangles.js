function drawTriangles() {
  // Get the height, symbol, and direction values from the input fields
  let height = parseInt(document.getElementById("height").value);
  let symbol = document.getElementById("symbol").value;
  let direction = document.getElementById("direction").value;

  // Draw the triangle based on the selected direction
  let triangle = "";
  if (direction === "increasing") {
    triangle = drawTriangleIncreasing(height, symbol);
  } else if (direction === "decreasing") {
    triangle = drawTriangleDecreasing(height, symbol);
  } else if (direction === "both") {
    let increasingTriangle = drawTriangleIncreasing(height, symbol);
    let decreasingTriangle = drawTriangleDecreasing(height, symbol);
    triangle = increasingTriangle + "<br>" + decreasingTriangle;
  }

  // Display the triangle in the output div
  document.getElementById("output").innerHTML = triangle;
}

// Function for drawing triangle in increasing way
function drawTriangleIncreasing(height, symbol) {
  let triangle = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += symbol + " ";
    }
    triangle += row + "<br>";
  }
  return triangle;
}

// Function for drawing triangle in decreasing way
function drawTriangleDecreasing(height, symbol) {
  // Base case: if height is 0, return an empty string
  if (height === 0) {
    return "";
  }
  // Recursive step: build the row and triangle recursively
  let row = "";
  for (let i = 0; i < height; i++) {
    row += symbol + " ";
  }
  let triangle = drawTriangleDecreasing(height - 1, symbol);
  return row + "<br>" + triangle;
}
