const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
// const img = new Image();

// img.onload = function () {
//   ctx.drawImage(img, 0, 0, img.width, img.height);
// };

// img.src = './pic.jpg';

// ctx.fillStyle = '#001d3d';
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// function drawImage(x, y, size) {
//   ctx.beginPath();
//   ctx.arc(x, y, size, 0, Math.PI * 2);
//   ctx.fillStyle = '#fff';
//   ctx.fill();
//   ctx.closePath();
// }

// for (let i = 0; i < 100; i++) {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height;
//   const size = Math.random() * 2 + 1;
//   drawImage(x, y, size);
// }

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 15, 150, 100);

// canvas.width = 400;
// canvas.height = 200;

// ctx.fillStyle = 'blue';

// ctx.fillRect(50, 50, 100, 100);
// ctx.clearRect(75, 75, 50, 50);

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 120);
// ctx.closePath();

// ctx.fillStyle = 'orange';
// ctx.fill();

// ctx.moveTo(150, 50);
// ctx.lineTo(200, 50);
// ctx.lineTo(150, 120);
// ctx.closePath();

// ctx.fillStyle = 'blue';
// ctx.fill();

// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 300, 150);
// ctx.globalAlpha = 0.5;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(50, 50, 200, 300);

// ctx.fillStyle = 'green';
// ctx.fillRect(20, 25, 500, 100);

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(150, 75, 50, 0, Math.PI * 2);
// ctx.fill();

canvas.width = 500;
canvas.height = 200;
ctx.font = '42px Arial';
ctx.fillText('Hello, Iam Canvas', 50, 100);
