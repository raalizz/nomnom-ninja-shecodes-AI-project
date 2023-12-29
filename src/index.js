function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "the recipe will go here",
    autoStart: true,
    cursor: "🧑🏻‍🍳",
    delay: 40,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateRecipe);
