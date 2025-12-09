export const matrix = length => {
   let arr = [];
   for (let i = 0; i < length; i++) arr.push([]);

   let numbers = 1;
   let iterationsSum = length * length;
   let iterationsFirstStep = length;
   let step = length - 1; // для matrix(3) шаги будут 3, 2, 2, 1, 1, для matrix(5) 5, 4, 4, 3, 3, 2, 2, 1, 1.;
   let currentRow;
   let currentCol;

   let firstStep = true;

   while (iterationsSum > 0) {
// первый шаг всегда одинаковый
      if (firstStep === true) { // после самой первой итерации скипаем эту часть
         for (let j = 0; j < iterationsFirstStep; j++) {
            arr[0][j] = numbers++;
         }
         firstStep = false; 
         iterationsSum -= iterationsFirstStep;
         currentRow = 0;
         currentCol = length - 1;
         continue;
      }

      // ХУЯЧИМ ВНИЗ
      for (let i = 1; i <= step && iterationsSum > 0; i++) {
         arr[currentRow + i][currentCol] = numbers++;
         iterationsSum--;
      }
      currentRow += step;

      // ХУЯЧИМ ВЛЕВО
      for (let i = 1; i <= step && iterationsSum > 0; i++) {
         arr[currentRow][currentCol - i] = numbers++;
         iterationsSum--;
      }
      currentCol -= step;

      step--; // два шага (две итерации) сделаны, значит уменьшаем шаг на 1;

      // ХУЯЧИМ ВВЕРХ
      for (let i = 1; i <= step && iterationsSum > 0; i++) {
         arr[currentRow - i][currentCol] = numbers++;
         iterationsSum--;
      }
      currentRow -= step;

      // ХУЯЧИМ ВПРАВО
      for (let i = 1; i <= step && iterationsSum > 0; i++) {
         arr[currentRow][currentCol + i] = numbers++;
         iterationsSum--;
      }
      currentCol += step;

      // два шага снова пройдено, уменьшаем step ещё на 1;
      step--;
   }

   return arr;
};

console.log(matrix(5));

/*

        матрица(3)

        [1,  2,  3],    1) идём вправо, пока не врежемся
        [1,  1,  4],    2) идём вниз, пока не врежемся
        [7,  6,  5],    3) идём влево, пока не врежемся
                        4) идём вверх, пока не врежемся
                        5) идём вправо, пока не врежемся - и повторяем цикл.
                
        3, 2, 2, 1, 1 - шаги.

*/
        
/*
        матрица(5)
    
        [1,  2,  3,  4],     1) идём вправо, пока не врежемся
        [12, 13, 14, 5],     2) идём вниз, пока не врежемся
        [11, 16, 15, 6],     3) идём влево, пока не врежемся
        [10, 9,  8,  7],     4) идём вверх, пока не врежемся
                     5) идём вправо, пока не врежемся - и повторяем цикл.
        
        4, 3, 3, 2, 2, 1, 1 - шаги

*/

/*
        матрица(6)

        [1,   2,   3,   4,  5],  
        [16,  17,  18,  19, 6],  
        [15,  24,  25,  20, 7],
        [14,  23,  22,  21, 8],  
        [13,  12,  11,  10, 9],


        5, 4, 4, 3, 3, 2, 2, 1, 1.
        
*/