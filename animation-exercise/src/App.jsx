import { useEffect, useRef, useState } from "react";
import "./App.css";

function Matrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const fontSize = 8;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const intervalId = setInterval(draw, 33);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
    />
  );
}

function App() {
  const [matrixActivated, setMatrixActivated] = useState(false);

  const handleTextClick = () => {
    setMatrixActivated(true);
  };

  return (
    <>
      {matrixActivated ? (
        <Matrix />
      ) : (
        <h1 className="home-title">
          {/* <span>Hack The World</span> */}
          <span className="enterMatrix" onClick={handleTextClick}>
            →Enter the Matrix←
          </span>
        </h1>
      )}
    </>
  );
}

export default App;
