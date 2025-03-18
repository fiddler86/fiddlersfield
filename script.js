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

// Romance Quiz Feature
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = quizForm.querySelector('input[name="quiz"]:checked');
    if (!selected) {
        quizResult.textContent = "Pick an option to see your spark!";
        return;
    }
    const answer = selected.value;
    if (answer === "a") {
        quizResult.textContent = "You’re the Spontaneous Ember—keeping love unpredictable!";
    } else if (answer === "b") {
        quizResult.textContent = "You’re the Steady Flame—warmth in the quiet moments.";
    } else if (answer === "c") {
        quizResult.textContent = "You’re the Roaring Blaze—big love, big energy!";
    } else if (answer === "d") {
        quizResult.textContent = "You’re the Deep Ember—connection through soulful talks.";
    }
});