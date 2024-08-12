const getJokeBtn = document.getElementById("get-joke-btn");
const jokeEl = document.getElementById("joke");

const API = "https://icanhazdadjoke.co/";

getJokeBtn.addEventListener("click", () => {
  fetch(API, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerText = data.joke;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      jokeEl.innerText = "Failed to fetch joke. Please try again.";
    });
});
