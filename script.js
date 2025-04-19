document.getElementById("fortuneBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value.trim();
  const display = document.getElementById("fortuneDisplay");

  if (!name) {
    display.innerHTML = "Please enter your name!";
    return;
  }

  display.innerHTML = "🔮 Consulting the spirits...";

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const fortune = data.slip.advice;

    display.innerHTML = `🧞‍♂️ Hello <strong>${name}</strong>, your fortune is:<br><em>"${fortune}"</em>`;
  } catch (error) {
    display.innerHTML = "Oops! The spirits are busy. Try again later.";
    console.error(error);
  }
});
