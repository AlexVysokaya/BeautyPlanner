export function generationMatrix(weekDays, activeDate, nDays) { //генерируем матрицу календаря
  let matrix = []; //матрица 7х7

  matrix[0] = weekDays; //первая строка дни недели

  const year = activeDate.getFullYear();
  const month = activeDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  let maxDays = nDays[month];

  if (month === 1) { //Февраль
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { //год високосный
      maxDays += 1;
    }
  }

  let counter = 1;
  for (let row = 1; row < 7; row++) { //цикл по строкам матрицы
    matrix[row] = [];
    for (let col = 0; col < 7; col++) { //цикл по ячейкам строки
      matrix[row][col] = -1;
      if (row === 1 && col >= firstDay) { //начинаем заполнение первой строки
        matrix[row][col] = counter++;
      } else if (row > 1 && counter <= maxDays) { //заполняем следующие строки пока счетчик
        //не превышает количество дней в месяце
        matrix[row][col] = counter++;
      }
    }
  }

  return matrix;
}