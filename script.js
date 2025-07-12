const characters = [
    "images/kid1.jpg",
    "images/kid2.jpg",
    "images/kid3.jpg",
    "images/kid4.jpg"
  ];
  
  let interval;
  let currentIndex = 0;
  
  window.onload = () => {
    document.getElementById("character-img").src = characters[0];
    document.getElementById("message").innerText = "กดปุ่มสุ่มเพื่อเริ่ม!";
  };
  
  function startRandom() {
    if (interval) return;
    document.getElementById("character").classList.add("sampling");
    document.getElementById("message").innerText = "กำลังสุ่ม...";
    interval = setInterval(() => {
      currentIndex = Math.floor(Math.random() * characters.length);
      const imgUrl = characters[currentIndex];
      document.getElementById("character-img").src = imgUrl;
    }, 100);
  }
  
  function stopRandom() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
    document.getElementById("character").classList.remove("sampling");
    document.getElementById("message").innerText = "ยินดีด้วย คุณได้รับกล่องสุ่ม 🎉";
  }
  