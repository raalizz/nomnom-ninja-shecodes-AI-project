function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#ingredients");

  let apiKey = "da1f0bo0fb43abc333bbad06624a9e8t";
  let prompt = `User instructions: Generate one recipe only from the ${ingredientsInput.value} in basic HTML and separate each line with a <br /> . Make the recipe name bold and underlined.`;
  let context =
    "You are a professional chef and love to create delicious and simple recipes using any ingredient available in the kitchen. Your mission is to generate full step-by-step simple recipes with the provided ingredients. Make sure to follow the user's instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeSection = document.querySelector("#recipe-section");
  recipeSection.classList.remove("hidden");

  axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateRecipe);
