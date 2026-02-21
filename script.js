const trainedWords = {
  HARDNESS : "8947",
  RESONATE: "5264",
  VELOCITY : "7465",
  GRADIENT : "6513",
  ETHERNET : "4265"
};

const chat = document.getElementById("chat");
const input = document.getElementById("input");

// ✅ PLACEHOLDER ADDED
input.placeholder = "Type HARDNESS / RESONATE / VELOCITY / GRADIENT / ETHERNET";

// ENTER KEY SUPPORT
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    send();
  }
});

// Initial bot messages
setTimeout(() => addBot("Hello 👋 Welcome to Smart Code Bot"), 500);

function send() {
  const text = input.value.toUpperCase().trim();
  if (!text) return;

  addUser(text);
  input.value = "";

  setTimeout(() => {
    if (trainedWords[text]) {
      addBot(`✅ Your code for ${text} is: ${trainedWords[text]}`);
    } else {
      addBot("❌ Wrong Input. Try HARDNESS / RESONATE / VELOCITY / GRADIENT / ETHERNET ");
    }
  }, 600);
}

function addBot(msg) {
  const div = document.createElement("div");
  div.className = "msg bot";
  div.innerText = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function addUser(msg) {
  const div = document.createElement("div");
  div.className = "msg user";
  div.innerText = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}


