// function Matrix(canvas, textElement) {
//   var ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
//   letters = letters.split("");

//   var fontSize = 10,
//     columns = canvas.width / fontSize;

//   var drops = [];
//   for (var i = 0; i < columns; i++) {
//     drops[i] = 1;
//   }

//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     for (var i = 0; i < drops.length; i++) {
//       var text = letters[Math.floor(Math.random() * letters.length)];
//       ctx.fillStyle = "#20c20e";
//       ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//       drops[i]++;
//       if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
//         drops[i] = 0;
//       }
//     }
//   }

//   setInterval(draw, 33);

//   textElement.addEventListener("click", function () {
//     textElement.style.display = "none";
//   });
// }

// export default Matrix;
