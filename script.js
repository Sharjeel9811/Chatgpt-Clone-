let prompt = document.querySelector("#prompt");
let chatcontainer = document.querySelector(".chat-container");

const Api_url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBwcr96JryCVmVTgRGanQj3HMroLmMzq44"; 

let user={
    message:null,
}

async function generateResponse(aiChatBox){


let RequestOption={
    Method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify()
}
    let response=fetch(Api_url,RequestOption {
        
    })
}

function CreateChatBox(html, classes) {
    let div = document.createElement("div");
    div.innerHTML = html;
    div.classList.add(classes);
    return div;
}

function handlechatResponse(message) {
    // User message
    let userHtml = `
      <img src="user.png" alt="" id="userImage" width="50px">
      <div class="user-chat-area">
        <p>${message}</p>
      </div>
    `;
    let userchatBox = CreateChatBox(userHtml, "user-chat-box");
    chatcontainer.appendChild(userchatBox);

    // Typing/loading animation
    let loadingHtml = `
      <img src="chatgpt (1).png" alt="" id="aiimage" width="50px" />
      <div class="ai-chat-area">
        <p class="loading-dots"></p>
      </div>
    `;
    let loadingBox = CreateChatBox(loadingHtml, "ai-chat-box");
    chatcontainer.appendChild(loadingBox);

    // Animate dots: '.', '..', '...'
    let dots = "";
    let dotInterval = setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        loadingBox.querySelector("p").textContent = dots;
    }, 300);

    // After delay, replace with AI reply
    setTimeout(() => {
        clearInterval(dotInterval);
        let aiHtml = `
          <img src="chatgpt (1).png" alt="" id="aiimage" width="50px" />
          <div class="ai-chat-area">
        
          </div>
        `;
        let aiChatBox = CreateChatBox(aiHtml, "ai-chat-box");
        chatcontainer.replaceChild(aiChatBox, loadingBox);
        generateResponse(aiChatBox);
    }, 2000); // Delay to simulate typing
}

prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        handlechatResponse(prompt.value);
        prompt.value = "";
    }
});
