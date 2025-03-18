// Daily Prompt Feature (Ember)
const embers = [
    "Hide a sweet note in their pocket to find later.",
    "Light a candle and share a 10-minute slow dance.",
    "Recall the moment you knew they were the one.",
    "Bake something simple together tonight."
];

const promptText = document.getElementById("prompt-text");
const promptBtn = document.getElementById("prompt-btn");

promptBtn.addEventListener("click", () => {
    const randomEmber = embers[Math.floor(Math.random() * embers.length)];
    promptText.textContent = randomEmber;
});

// Date Planner Feature (Flame)
const dateBtn = document.getElementById("date-btn");
const dateIdea = document.getElementById("date-idea");
const partnerPref = document.getElementById("partner-pref");

dateBtn.addEventListener("click", () => {
    const pref = partnerPref.value.toLowerCase();
    if (pref.includes("food") || pref.includes("eat")) {
        dateIdea.textContent = "Cook up a storm with a recipe you’ve never tried.";
    } else if (pref.includes("movie") || pref.includes("watch")) {
        dateIdea.textContent = "Dim the lights for a movie night with their favorite snacks.";
    } else if (pref.includes("outdoors") || pref.includes("walk")) {
        dateIdea.textContent = "Chase the sunset with a walk somewhere scenic.";
    } else {
        dateIdea.textContent = "Settle in with a warm drink and a cozy game night.";
    }
});