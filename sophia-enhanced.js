
(() => {
  const greeting = "https://resource2.heygen.ai/text_to_speech/1db27ca70e7b4e3eb53ccfb45d01c395/5acc27d266a14118a0742129086eb7f3/id=12b4d2ca-fd7e-46f9-9212-bb1cd7757e2e.wav";

  const style = document.createElement("style");
  style.textContent = `
    @keyframes sophiaBreathe {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
    .sophia-presence {
      animation: sophiaBreathe 7s ease-in-out infinite;
    }
    .sophia-voice-button {
      position: fixed;
      bottom: 25px;
      right: 16px;
      z-index: 9999;
      padding: 14px 20px;
      border: none;
      border-radius: 30px;
      background: #473347;
      color: white;
      font-size: 16px;
    }
  `;
  document.head.appendChild(style);

  const portrait = [...document.querySelectorAll("img")]
    .find(img => img.getBoundingClientRect().height > 180);

  if (portrait) portrait.classList.add("sophia-presence");

  const audio = new Audio(greeting);
  const button = document.createElement("button");
  button.className = "sophia-voice-button";
  button.textContent = "❤️ Hear Sophia";
  document.body.appendChild(button);

  button.onclick = async () => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      button.textContent = "❤️ Hear Sophia";
      return;
    }
    button.textContent = "■ Stop Sophia";
    try {
      await audio.play();
    } catch {
      button.textContent = "Try again";
    }
  };

  audio.onended = () => {
    button.textContent = "❤️ Hear Sophia";
  };
})();
