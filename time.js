const activityDiv = document.getElementById('activity');
const getActivityButton = document.getElementById('getActivity');
const resetButton = document.getElementById('reset');

const activities = [
    "Watch a funny cat video! 🐱",
    "Try to draw your favorite cartoon character! 🎨",
    "Take a quick dance break! 💃",
    "Make a cute paper airplane! ✈️",
    "Write a silly poem! 📝",
    "Explore a new cute animal meme! 🦙",
    "Have a mini snack break with your favorite treat! 🍪",
    "Play a short, silly game! 🎮",
    "Try to juggle some fruits! 🍌🍏",
    "Give yourself a compliment! 🌟"
];

getActivityButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    activityDiv.textContent = activities[randomIndex];
});

resetButton.addEventListener('click', () => {
    activityDiv.textContent = "";
});
