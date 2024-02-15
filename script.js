const inputDay = document.querySelector(".day input");
const inputMonth = document.querySelector(".month input");
const inputYear = document.querySelector(".year input");
const button = document.querySelector(".img-container");
const form = document.querySelector("#form");
const errorMessageDay = document.querySelector("#error-day");
const errorMessageMonth = document.querySelector("#error-month");
const errorMessageYear = document.querySelector("#error-year");
const spanYear = document.querySelector("#year");
const spanMonth = document.querySelector("#month");
const spanDay = document.querySelector("#day");
// ==========================================
var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();

button.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;
  if (!inputDay.value) {
    errorMessageDay.style.display = "block";
  }
  if (!inputMonth.value) {
    errorMessageMonth.style.display = "block";
  }
  if (!inputYear.value) {
    errorMessageYear.style.display = "block";
  }

  //   const years = Math.abs(inputYear.value - currentYear);
  //   const months = Math.abs(inputMonth.value - currentMonth);
  //   const days = Math.abs(inputDay.value - currentDay);
  //   const ageInDays = years * 365.25 + months * 30.44 + days;
  //   var age = Math.floor(ageInDays / 365.25);
  //   if (
  //     currentMonth < inputMonth.value ||
  //     (currentMonth === inputMonth.value && currentDay < inputDay.value)
  //   ) {
  //     age--;
  //     var month = 12 - inputMonth.value + currentMonth;
  //     var day = Math.floor(31 - inputDay.value + currentDay);
  //   } else {
  //     var month = Math.floor(((ageInDays / 365.25) % 1) * 12);
  //     var day = Math.floor(((ageInDays / 365.25) % 1) * 30.44);
  //   }

  var inputDate = new Date(
    inputYear.value,
    inputMonth.value - 1,
    inputDay.value
  );
  var currentDate = new Date();
  var years = currentDate.getFullYear() - inputDate.getFullYear();
  if (
    currentDate.getMonth() < inputDate.getMonth() ||
    (currentDate.getMonth() === inputDate.getMonth() &&
      currentDate.getDate() < inputDate.getDate())
  ) {
    years--;
  }
  spanYear.textContent = years;
  var diff = Math.max(currentDate - inputDate, 0);
  var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  var months = 0;
  while (inputDate < currentDate) {
    inputDate.setMonth(inputDate.getMonth() + 1);
    if (inputDate <= currentDate) {
      months++;
    }
  }
  if (
    currentDate.getMonth() < inputDate.getMonth() ||
    (currentDate.getMonth() === inputDate.getMonth() &&
      currentDate.getDate() < inputDate.getDate())
  ) {
    years--;
    months += 12;
  }
  months = months % 12;
  days = currentDate.getDate() - inputDate.getDate();
  spanMonth.textContent = months;
  spanDay.textContent = days;
});
