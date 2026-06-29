const form = document.querySelector("#form");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const resultEl = document.querySelector("#result");

form.addEventListener("submit", (even) => {
  even.preventDefault();
  height = parseInt(heightInput.value);
  weight = parseInt(weightInput.value);

  if (height === "" || height < 0 || isNaN(height)) {
    resultEl.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    resultEl.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    if (bmi < 18.6) {
      resultEl.innerHTML = `<span>${bmi}! Under Weight </span>`;
    } else if (bmi > 18.6 || bmi < 24.9) {
      resultEl.innerHTML = `<span>${bmi}! Wow your weight is normal range </span>`;
    } else {
      resultEl.innerHTML = `<span>${bmi}! Your weight too many over weight </span>`;
    }
  }
});
