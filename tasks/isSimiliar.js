// 2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк.
// Если у одной строки с последующей совпадают первый и последний символы, то true. 
// Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]

const isSimiliar = (arr) => {
    const isSimiliarArr = [];
    for (i = 0; i < arr.length - 1; i++) {
        let firstString = arr[i].at(0) + arr[i].at(-1);
        let secondString = arr[i + 1].at(0) + arr[i + 1].at(-1)
        firstString === secondString ? isSimiliarArr.push(true) : isSimiliarArr.push(false);
    }

    return isSimiliarArr;
}

console.log(isSimiliar(["asd", "afffd", "cc", "kk", "kdasdk"]));