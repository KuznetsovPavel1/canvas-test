const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

canvas.height = 50; //480;
canvas.width = 1000; //640;
const ampl = canvas.height / 2;

// strings
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(500, 100);
// // ctx.fill();
// ctx.stroke();

const string = {
  start: [0, ampl],
  mid: [500, ampl],
  end: [1000, ampl],
  offset: 3,
  extremum: 0,
  draw: () => {
    // ctx.strokeStyle = "rgb(255,0,0)";
    ctx.beginPath();
    ctx.bezierCurveTo(
      string.start[0],
      string.start[1],
      string.mid[0],
      string.mid[1],
      string.end[0],
      string.end[1]
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.bezierCurveTo(
      string.start[0],
      string.start[1] + 2,
      string.mid[0],
      string.mid[1] + 2,
      string.end[0],
      string.end[1] + 1
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.bezierCurveTo(
      string.start[0],
      string.start[1] - 2,
      string.mid[0],
      string.mid[1] - 2,
      string.end[0],
      string.end[1] - 1
    );
    ctx.stroke();
  },
};
string.draw();

let { draw, mid, offset, extremum } = string;

const pullString = () => {
  // console.log("func", mid, "||", offset, "|", extremum);

  if (extremum === ampl) {
    // console.log("clear");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  draw();
  mid[1] += offset;
  if (
    mid[1] + offset > canvas.height - extremum ||
    mid[1] + offset < extremum
  ) {
    offset = -offset;
  }

  if (extremum !== ampl) {
    if (mid[1] === 25) {
      extremum += ampl * 0.1;
    }
    raf = window.requestAnimationFrame(() => pullString());
  }
};

canvas.addEventListener("mouseover", (e) => {
  // console.log("listener", e);
  extremum = 0;
  raf = window.requestAnimationFrame(() => pullString());
});

// canvas.addEventListener("mouseout", (e) => {
//   window.cancelAnimationFrame(raf);
// });

// chess board
// ctx.strokeStyle = "#B70A02"; // меняем цвет рамки
// ctx.strokeRect(15, 15, 266, 266);
// ctx.strokeRect(18, 18, 260, 260);
// ctx.fillStyle = "#AF5200"; // меняем цвет клеток
// ctx.fillRect(20, 20, 256, 256);

// for (i = 0; i < 8; i += 2)
//   for (j = 0; j < 8; j += 2) {
//     ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
//     ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//   }

// crown
// ctx.beginPath();
// ctx.arc(80, 100, 56, (3 / 4) * Math.PI, (1 / 4) * Math.PI, true);
// ctx.fill(); // *14
// ctx.moveTo(40, 140);
// ctx.lineTo(20, 40);
// ctx.lineTo(60, 100);
// ctx.lineTo(80, 20);
// ctx.lineTo(100, 100);
// ctx.lineTo(140, 40);
// ctx.lineTo(120, 140);
// ctx.stroke(); // *22

// bezier curve
// ctx.beginPath();
// ctx.moveTo(10, 15);
// ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
// ctx.moveTo(10, 15);
// ctx.quadraticCurveTo(100, 100, 250, 15);
// ctx.strokeStyle = "orange";
// ctx.stroke();

// house
// let cellSize = 32,
//   pic = new Image(),
//   map = [
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 1 },
//       { x: 2, y: 1 },
//       { x: 3, y: 1 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 2 },
//       { x: 2, y: 2 },
//       { x: 3, y: 2 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 3 },
//       { x: 1, y: 3 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 3, y: 4 },
//       { x: 2, y: 3 },
//       { x: 3, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 3, y: 4 },
//       { x: 2, y: 4 },
//       { x: 3, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 3 },
//       { x: 1, y: 3 },
//       { x: 1, y: 3 },
//       { x: 1, y: 3 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//     [
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//       { x: 1, y: 4 },
//     ],
//   ];
// example.width = 8 * cellSize;
// example.height = 8 * cellSize;
// pic.src =
//   "http://habr.habrastorage.org/post_images/e85/727/cb1/e85727cb1a88099325eaf5b243d4c41f.png";
// pic.onload = function () {
//   for (var j = 0; j < 8; j++) {
//     for (var i = 0; i < 8; i++) {
//       ctx.drawImage(
//         pic,
//         (map[i][j].x - 1) * cellSize,
//         (map[i][j].y - 1) * cellSize,
//         32,
//         32,
//         j * cellSize,
//         i * cellSize,
//         32,
//         32
//       );
//     }
//   }
// };
