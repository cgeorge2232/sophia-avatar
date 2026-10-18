(() => {
  const API = "https://sophia-chat.cgeorge2232.workers.dev";

  async function askSophia(message) {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "AI connection failed");
    }

    const reply =
      data.reply ||
      data.response ||
      data.answer ||
      data.text ||
      data.message ||
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.choices?.[0]?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      throw new Error("Sophia did not return an answer");
    }

    return reply.trim();
  }

  window.askSophiaAI = askSophia;
})();
