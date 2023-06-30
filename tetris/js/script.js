'use strict';
document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('game'),
        context = canvas.getContext('2d'),
        pointsOnScreen = document.querySelector('#points'),
        recordOnScreen = document.querySelector('#record'),
        speedOnScreen = document.querySelector('#speed');

  let points = 0,
      record,
      speed = 1,
      gameStatus = false;

  if (localStorage.getItem('record')) {
  record = localStorage.getItem('record');
  } else {
    localStorage.setItem('record', 0);
    record = 0;
  }
  function writeRecord() {
    if (localStorage['record'] < points) {
      localStorage.removeItem('record');
      localStorage.setItem('record', points);
    }
    recordOnScreen.textContent = localStorage['record'];
  }
  writeRecord();

  function addPoints() {
    pointsOnScreen.textContent = `${points}`;
  }
  addPoints();

  function addSpeed() {
    speedOnScreen.textContent = `${speed}`;
  }
  addSpeed();

  // размер квадратика
  const grid = 25;
  // массив с последовательностями фигур, на старте — пустой
  let tetrominoSequence = [],
      playfield = [];

  // заполняем сразу массив(поле 10 на 20) пустыми ячейками
  for (let row = -2; row < 20; row++) {
    playfield[row] = [];

    for (let col = 0; col < 10; col++) {
      playfield[row][col] = 0;
    }
  }

  const tetrominos = {
    'I': [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]
    ],
    'J': [
      [1,0,0],
      [1,1,1],
      [0,0,0],
    ],
    'L': [
      [0,0,1],
      [1,1,1],
      [0,0,0],
    ],
    'O': [
      [1,1],
      [1,1],
    ],
    'S': [
      [0,1,1],
      [1,1,0],
      [0,0,0],
    ],
    'Z': [
      [1,1,0],
      [0,1,1],
      [0,0,0],
    ],
    'T': [
      [0,1,0],
      [1,1,1],
      [0,0,0],
    ]
  };

  const colors = {
    'I': '#04ECF0',
    'O': '#FBF900',
    'T': '#54086B',
    'S': '#31ED31',
    'Z': '#F51720',
    'J': '#0000FF',
    'L': '#FF0BAC'
  };

  let count = 0,
      tetromino = getNextTetromino(), // текущая фигура в игре
      rAF = null,
      gameOver = false;

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // создаём последовательность фигур, которая появится в игре
  function generateSequence() {
      const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    
      while (sequence.length) {
        const rand = getRandomInt(0, sequence.length - 1);
        const name = sequence.splice(rand, 1)[0];
        tetrominoSequence.push(name);
      }
  }

  function getNextTetromino() {
      if (tetrominoSequence.length === 0) {
        generateSequence();
      }
      const name = tetrominoSequence.pop(),
            matrix = tetrominos[name],
            col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2),
            row = name === 'I' ? -1 : -2;
      return {
        name: name,      // название фигуры (L, O, и т.д.)
        matrix: matrix,  // матрица с фигурой
        row: row,        // текущая строка (фигуры стартуют за видимой областью холста)
        col: col         // текущий столбец
      };
  }

  function rotate(matrix) {
      const N = matrix.length - 1;
      const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
      );
      return result;
    }

  // проверяем после появления или вращения, может ли матрица (фигура) быть в этом месте поля или она вылезет за его границы
  function isValidMove(matrix, cellRow, cellCol) {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] && (
              // если выходит за границы поля…
              cellCol + col < 0 ||
              cellCol + col >= playfield[0].length ||
              cellRow + row >= playfield.length ||
              // …или пересекается с другими фигурами
              playfield[cellRow + row][cellCol + col])
            ) {
            return false;
          }
        }
      }
      return true;
  }

  // когда фигура окончательна встала на своё место
  function placeTetromino() {
      // обрабатываем все строки и столбцы в игровом поле
      for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
          if (tetromino.matrix[row][col]) {
    
            // если край фигуры после установки вылезает за границы поля, то игра закончилась
            if (tetromino.row + row < 0) {
              return showGameOver();
            }
            // если всё в порядке, то записываем в массив игрового поля нашу фигуру
            playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
          }
        } 
      }
      // проверяем, чтобы заполненные ряды очистились снизу вверх
      for (let row = playfield.length - 1; row >= 0; ) {
        // если ряд заполнен
        if (playfield[row].every(cell => cell)) {
    
          // очищаем его и опускаем всё вниз на одну клетку
          for (let r = row; r >= 0; r--) {
            for (let c = 0; c < playfield[r].length; c++) {
              playfield[r][c] = playfield[r-1][c];
            }
          }
          points += 100;
          addPoints();
          writeRecord();
          changeSpeed();
        }
        else {
          // переходим к следующему ряду
          row--;
        }
      }
      // получаем следующую фигуру
      tetromino = getNextTetromino();
  }

  function showGameOver() {
      cancelAnimationFrame(rAF);
      gameOver = true;
      context.fillStyle = 'black';
      context.globalAlpha = 0.75;
      context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
      context.globalAlpha = 1;
      context.fillStyle = 'white';
      context.font = '36px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
      writeRecord();
  }

  // следим за нажатиями на клавиши
  document.addEventListener('keydown', function(e) {
      if (gameOver) return;
    
      // стрелки влево и вправо
      if (e.which === 37 || e.which === 39) {
        const col = e.which === 37
          ? tetromino.col - 1
          : tetromino.col + 1;
    
        if (isValidMove(tetromino.matrix, tetromino.row, col)) {
          tetromino.col = col;
        }
      }
    
      // стрелка вверх — поворот
      if (e.which === 38) {
        const matrix = rotate(tetromino.matrix);
        if (isValidMove(matrix, tetromino.row, tetromino.col)) {
          tetromino.matrix = matrix;
        }
      }
    
      // стрелка вниз — ускорить падение
      if(e.which === 40) {
        const row = tetromino.row + 1;
        if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
          tetromino.row = row - 1;
          placeTetromino();
          return;
        }
        tetromino.row = row;
      }
  });

  // главный цикл игры
  function loop() {
      gameStatus = true;
      rAF = requestAnimationFrame(loop);
      // очищаем холст
      context.clearRect(0,0,canvas.width,canvas.height);
    
      // рисуем игровое поле с учётом заполненных фигур
      for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
          if (playfield[row][col]) {
            const name = playfield[row][col];
            // console.log(name);
            context.fillStyle = colors[name];
            // рисуем всё на один пиксель меньше, чтобы получился эффект «в клетку»
            context.fillRect(col * grid, row * grid, grid-1, grid-1);
          } else {
              context.fillStyle = '#1e1e1e';
              context.fillRect(col * grid, row * grid, grid-1, grid-1);
          }
        }
      }
    
      // рисуем текущую фигуру
      if (tetromino) {  
        playPause('play', 30);
    
        // не забываем про цвет текущей фигуры
        context.fillStyle = colors[tetromino.name];
    
        // отрисовываем её
        for (let row = 0; row < tetromino.matrix.length; row++) {
          for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {
              // и снова рисуем на один пиксель меньше
              context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
            }
          }
        }
      }
  }

  function playPause(status, speed) {
      if (status === 'play') {
          if (++count > speed) {
              tetromino.row++;
              count = 0;
        
              // если движение закончилось — рисуем фигуру в поле и проверяем, можно ли удалить строки
              if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
                tetromino.row--;
                placeTetromino();
              }
          }
      } else if (status === 'pause') {
          cancelAnimationFrame(rAF);
          context.fillStyle = 'black';
          context.globalAlpha = 0.75;
          context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
          context.globalAlpha = 1;
          context.fillStyle = 'white';
          context.font = '36px monospace';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText('PAUSE', canvas.width / 2, canvas.height / 2);
          writeRecord();
      }
  }

  // старт игры
  document.addEventListener('keydown', function(e) {
      if (gameOver === true && e.which === 13) {
          for (let row = -2; row < 20; row++) {
              playfield[row] = [];
            
              for (let col = 0; col < 10; col++) {
                playfield[row][col] = 0;
              }
          }
          gameOver = false;
          points = 0;
          addPoints();
          rAF = requestAnimationFrame(loop);
          return;
      };

      if (e.which === 13 && gameOver === false) {
          rAF = requestAnimationFrame(loop);
      };
      if(e.which === 32 && gameOver === false && gameStatus === true) {
          playPause('pause');
      };
  });

  //повышение скорости
  function changeSpeed() {
    if(points < 1000) {
      playPause('play', 30);
      speed = 1;
    } else if (points < 2000) {
      playPause('play', 25);
      speed = 2;
    } else if (points < 4000) {
      playPause('play', 20);
      speed = 3;
    } else if (points < 8000) {
      playPause('play', 15);
      speed = 4;
    } else if (points < 12000) {
      playPause('play', 10);
      speed = 5;
    } else if (points < 25000) {
      playPause('play', 5);
      speed = 6;
    } else if (points < 50000) {
      playPause('play', 4);
      speed = 7;
    } else if (points < 100000) {
      playPause('play', 3);
      speed = 8;
    } else if (points < 200000) {
      playPause('play', 2);
      speed = 9;
    } else if (points >= 200000) {
      playPause('play', 1);
      speed = 10;
    }
    addSpeed();
  }

  const videoSource = document.querySelector('#source'),
        videoPlayer = document.getElementById('myVideo'),
        buttons = document.querySelector('.blockButtons'),
        informIcon = document.querySelector('.circle'),
        informBlock = document.querySelector('.informBlock_left');

  if (localStorage.getItem('theme')) {
    videoSource.setAttribute('src', `${localStorage.getItem('theme')}`);
    videoPlayer.load();
  }
  
  buttons.addEventListener('click', (e) => {
    if (e.target.alt === 'maldives') {
      videoSource.setAttribute('src', 'video/maldives.mp4');
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'video/maldives.mp4');
    } else if (e.target.alt === 'forest') {
      videoSource.setAttribute('src', 'video/forest.mp4');
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'video/forest.mp4');
    } else if (e.target.alt === 'mashrooms') {
      videoSource.setAttribute('src', 'video/mashrooms.mp4');
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'video/mashrooms.mp4');
    }
    videoPlayer.load();
  });

  informIcon.addEventListener('mouseover', () => {
    informBlock.classList.toggle('hide');
  });
  informIcon.addEventListener('mouseout', () => {
    informBlock.classList.toggle('hide');
  });
  
});
