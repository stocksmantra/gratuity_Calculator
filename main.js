
var slider = document.getElementById("myRange");
var output = document.getElementById("myRangeValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("myRangeValue").value = this.value;
}

output.oninput = function() {
  var value = parseInt(this.value);
  if (!isNaN(value) && value >= parseInt(slider.min) && value <= parseInt(slider.max)) {
    slider.value = value;
  }
}

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("myRange1Value");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  document.getElementById("myRange1Value").value = this.value;
}

output1.oninput = function() {
  var value = parseInt(this.value);
  if (!isNaN(value) && value >= parseInt(slider1.min) && value <= parseInt(slider1.max)) {
    slider1.value = value;
  }
}

function calculateGratuity() {
  var b = parseInt(document.getElementById("myRange").value);
  var n = parseInt(document.getElementById("myRange1").value);
  
  if (!isNaN(b) && !isNaN(n)) {
    var total_gratuity = n * b * 15 / 26;
    document.getElementById("outputt").innerHTML = total_gratuity;
  }
}
