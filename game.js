const story = [
  { name: "Alex", text: "Where am I...? This place feels unfamiliar." },
  { name: "Alex", text: "I must find out what's going on." },
  { name: "Mysterious Voice", text: "You have been chosen..." },
  { name: "Alex", text: "Who's there?! Show yourself!" }
];

let currentIndex = 0;

const nameEl = document.getElementById("character-name");
const textEl = document.getElementById("dialogue-text");
const nextBtn = document.getElementById("next-button");
const saveBtn = document.getElementById("save-button");
const loadBtn = document.getElementById("load-button");

function showDialogue(index) {
  if (index < story.length) {
  nameEl.textContent = story[index].name;
  textEl.textContent = story[index].text;

  // Restore button text if it was changed to Replay before
  if (nextBtn.textContent !== "Next") {
    nextBtn.textContent = "Next";
  }
} else {
  nameEl.textContent = "";
  textEl.textContent = "[End of Demo]";
  nextBtn.textContent = "Replay";
}
  


nextBtn.addEventListener("click", () => {
  if (currentIndex >= story.length) {
    // Reset for replay
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showDialogue(currentIndex);
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("rpg_save_index", currentIndex);
  alert("Game saved!");
});

loadBtn.addEventListener("click", () => {
  const savedIndex = localStorage.getItem("rpg_save_index");
  if (savedIndex !== null) {
    currentIndex = parseInt(savedIndex);
    showDialogue(currentIndex);
    alert("Game loaded!");
  } else {
    alert("No save data found.");
  }
});

showDialogue(currentIndex);
