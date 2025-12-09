/*
1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности) 
или массив (любой сложности и вложенности) или примитив. 
Функция должна вернуть то же самое что приняла аргументом, 
но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые).
 Функция не должна использовать хак с JSON.parse(JSON.stringify(data)).
*/

const obj1 = { user: 1, id: 1, name: 'Chris'}
const obj2 = [3, 5, 'data'];
const obj3 = { data: obj1, meta: obj2 }
const obj4 = { meta: 3, test: obj1}

const arr1 = [1, 2,];
const arr2 = [arr1, [obj3]];
const arr3 = [arr1, obj2];

const primitive = 532;

const cloneObj = (obj) => {

    if (typeof obj !== 'object' && obj !== null && !Array.isArray(obj)) {
        console.log(`Этот объект мы вовзращаем сразу : `, obj);
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};
    

    for (let keys of Object.keys(obj)) {
        console.log(`currentObjKey :`, obj[keys], `| typeof : `, typeof obj[keys]);
            clone[keys] = cloneObj(obj[keys])
        }

    return clone;

    }


const newObj = cloneObj(obj4);
console.log(newObj); // оказывается показывает хуйню, не показывая вложенные объекты полностью. Вот это прикол
console.log(JSON.stringify(newObj, null, 2)); // а вот так норм

newObj.newValue = 'some value';
console.log(newObj, arr2);
let someprimitive = 123;
let newObj2 = cloneObj(someprimitive);