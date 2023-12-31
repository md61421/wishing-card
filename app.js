let btn = document.querySelector(".btn");
let containerClass = document.querySelector(".container");

btn.addEventListener("click", function () {
  containerClass.style.animation = "slider 1.5s forwards";
  btn.style.visibility = "hidden";
});

let quotes = [
  "Reflect on achievements, learn from challenges. Every setback is a setup for a comeback. Embrace the new year with hope and determination.",
  "Celebrate progress, big or small. A new year brings fresh possibilities. Your journey matters, and you have the power to shape your story.",
  "Turn the page with gratitude. Each day is a chance to start anew. Believe in yourself, and let the coming year be your canvas.",
  "Embrace change, for it leads to growth. The best is yet to come. Keep going, stay positive, and welcome the opportunities of tomorrow.",
  "Look back with a smile, forward with courage. Your efforts count, and the new year invites you to dream big. Your journey is your victory.",
  "End the year with a grateful heart. Every moment is a gift. Tomorrow is a blank page—fill it with dreams and make them reality.",
  "Cherish memories, learn lessons. Your potential is limitless. As the year ends, step into the future with confidence and enthusiasm.",
  "Finish strong, start anew. Reflect on achievements, let go of what holds you back. The new year is a chance for a brighter, better you.",
  "You've come far, and there's more to explore. Each step shapes your path. The year's end is a bridge to new opportunities and adventures.",
  "Celebrate your journey, savor the present. As the year concludes, open your heart to the joy of new beginnings. Tomorrow is your unwritten story.",
];

let RandNum = Math.floor(Math.random() * 10);
let text = document.querySelector(".text");
text.innerText = quotes[RandNum];
