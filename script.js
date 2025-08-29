document.addEventListener("DOMContentLoaded", () => {
  const door = document.getElementById("door");
  const flashlight = document.getElementById("flashlight");

  // 扉開演出
  window.addEventListener("scroll", () => {
    const rect = door.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && !door.classList.contains("open")) {
      door.classList.add("open");
      playSound("door");
    }
  });

  // ジャンプスケア
  const scare1 = document.getElementById("scare1");
  window.addEventListener("scroll", () => {
    const rect = scare1.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7 && !scare1.dataset.triggered) {
      triggerScare();
      scare1.dataset.triggered = true;
    }
  });

  function triggerScare() {
    const flash = document.createElement("div");
    flash.classList.add("flash");
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
    playSound("scare");
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  }

  // 懐中電灯演出
  window.addEventListener("scroll", () => {
    const chanting = document.querySelector(".chanting").getBoundingClientRect();
    if (chanting.top < window.innerHeight * 0.5) {
      flashlight.style.display = "block";
    }
  });
  window.addEventListener("mousemove", (e) => {
    flashlight.style.clipPath = `circle(120px at ${e.clientX}px ${e.clientY}px)`;
  });

  // 効果音
  function playSound(type) {
    let audio;
    switch(type) {
      case "door": audio = new Audio("https://www.soundjay.com/door/door-1.mp3"); break;
      case "scare": audio = new Audio("https://www.soundjay.com/button/beep-07.wav"); break;
    }
    if (audio) audio.play();
  }
});
