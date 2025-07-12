const characters = [
    { img: "images/kid1.jpg", name: "น้องน่ารัก1" },
    { img: "images/kid2.jpg", name: "น้องน่ารัก2" },
    { img: "images/kid3.jpg", name: "น้องน่ารัก3" },
    { img: "images/kid4.jpg", name: "น้องน่ารัก4" }
];

let interval;
let currentIndex = 0;

window.onload = () => {
    document.getElementById("character-img").src = "images/kid1.jpg";
    document.getElementById("message").innerText = "กดปุ่มสุ่มเพื่อเริ่ม!";
  };
  

function setCharacterImage(url) {
    const img = new Image();
    img.onload = function() {
      const characterDiv = document.getElementById("character");
      characterDiv.style.width = this.width + "px";
      characterDiv.style.height = this.height + "px";
      characterDiv.style.backgroundImage = `url(${url})`;
    }
    img.src = url;
  }
  

function startRandom() {
    if (interval) return;
    document.getElementById("character").classList.add("sampling");
    document.getElementById("message").innerText = "กำลังสุ่ม...";
    interval = setInterval(() => {
        currentIndex = Math.floor(Math.random() * characters.length);
        const character = characters[currentIndex];
        setCharacterImage(characters[currentIndex].img);
        document.getElementById("character-img").src = characters[currentIndex].img;
        document.getElementById("message").innerText = `กำลังสุ่ม: ${character.name} ...`;
    }, 100);
}

function stopRandom() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
    document.getElementById("character").classList.remove("sampling");
    const character = characters[currentIndex];
    document.getElementById("message").innerText = `ยินดีด้วย คุณได้รับ: ${character.name} 🎉`;
}
