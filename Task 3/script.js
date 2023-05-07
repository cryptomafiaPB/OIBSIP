function convertTemp() {
    const temp = parseFloat(document.getElementById("temp").value);
    const unit = document.getElementById("unit").value;
    let convertedTemp;
    
    if (unit === "celsius") {
      convertedTemp = (temp * 9/5) + 32;
      document.getElementById("result").innerHTML = `${temp} °C = ${convertedTemp} °F`;
    } else {
      convertedTemp = (temp - 32) * 5/9;
      document.getElementById("result").innerHTML = `${temp} °F = ${convertedTemp} °C`;
    }
  }
  