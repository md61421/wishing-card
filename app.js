let btn = document.querySelector(".btn");
let containerClass = document.querySelector(".container");

btn.addEventListener("click", function () {
  containerClass.style.animation = "slider 1.5s forwards";
  btn.style.visibility = "hidden";
});

let quotes = [
  "Embrace the fresh start, cherish moments, and sparkle with positivity. Happy New Year to a year of endless possibilities!",
  "New year, new beginnings, new adventures. Cheers to a chapter full of joy, love, and success. Happy New Year!",
  "Wishing you a year filled with laughter, love, and incredible achievements. May every day be a new opportunity. Happy New Year!",
  "May the upcoming year be a canvas of dreams, painted with vibrant colors of joy and success. Happy New Year!",
  "Celebrate the magic of new beginnings. May the coming year bring prosperity, peace, and happiness. Happy New Year!",
  "Cheers to a year of growth, positivity, and seizing every opportunity. May success be your constant companion. Happy New Year!",
  "New year, new possibilities, new achievements. Embrace the journey ahead with open arms. Wishing you a spectacular New Year!",
  "As the clock strikes midnight, let hope reign, dreams soar, and success unfold. Happy New Year filled with endless possibilities!",
  "May the New Year be a chapter of triumphs, discoveries, and happiness. Embrace the journey with optimism. Happy New Year!",
  "Welcome the New Year with open hearts, bright smiles, and a spirit of adventure. Here's to joy, love, and success!",
];

let RandNum = Math.floor(Math.random() * 10);
let text = document.querySelector(".text"); 
text.innerText = quotes[RandNum];