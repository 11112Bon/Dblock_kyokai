body {
  margin: 0;
  background: black;
  color: #33ff33;
  font-family: "Courier New", monospace;
  font-size: 1rem;
}

#terminal {
  padding: 20px;
  white-space: pre-wrap;
  overflow-x: hidden;
}

img.evidence {
  display: block;
  max-width: 80%;
  margin: 20px auto;
  border: 2px solid #33ff33;
  filter: grayscale(80%) contrast(120%);
}

.glitch {
  color: #ff0000;
  text-shadow: 2px 0 #000, -2px 0 #0f0;
  animation: glitch 0.2s infinite;
}

@keyframes glitch {
  0% { transform: translate(0,0); }
  20% { transform: translate(-2px,2px); }
  40% { transform: translate(-2px,-2px); }
  60% { transform: translate(2px,2px); }
  80% { transform: translate(2px,-2px); }
  100% { transform: translate(0,0); }
}
