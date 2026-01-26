const trainedWords = {
  apple: "123",
  banana: "456",
  orange: "789"
};

const chat = document.getElementById("chat");
const input = document.getElementById("input");

// ✅ PLACEHOLDER ADDED
input.placeholder = "Type apple, banana, or orange";

// ENTER KEY SUPPORT
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    send();
  }
});

// Initial bot messages
setTimeout(() => addBot("Hello 👋 Welcome to Smart Code Bot"), 500);

function send() {
  const text = input.value.toLowerCase().trim();
  if (!text) return;

  addUser(text);
  input.value = "";

  setTimeout(() => {
    if (trainedWords[text]) {
      addBot(`✅ Your code for ${text} is: ${trainedWords[text]}`);
    } else {
      addBot("❌ Wrong Input. Try apple, banana, or orange");
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
