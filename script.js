'use strict'

import { matrix } from './tasks/matrix.js'

const $mainContainer = document.body.querySelector('.main__container');
const $matrixInput = document.body.querySelector('.matrix__input')
const $matrixInputButton = document.body.querySelector('.matrix__input__button')
const $matrixContainer = document.body.querySelector('.container__matrix')

console.dir($mainContainer);
console.dir($matrixInputButton);
console.log($matrixInputButton);

const render = (num) => {
        if (num.trim() === '') {
        alert(`Empty input. Please type a number`);
        return;
    }
       if (isNaN(+num)) {
        alert(`${num} is not a number type`);
        $matrixInput.value = '';
        return;
    } 


    const spiralMatrix = matrix(+num);
    $matrixInput.value = '';
    $matrixContainer.innerHTML = '';

    spiralMatrix.forEach((element, index) => {
        
        const matrixValue = document.createElement('div');
        matrixValue.innerHTML = JSON.stringify(element);
        matrixValue.classList.add('container__matrix__item')
        setTimeout(() => $matrixContainer.append(matrixValue), index * 200);
        
    })

}   

$matrixInputButton.addEventListener('click', () => {
    const value = $matrixInput.value;
    render(value)
} )
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    const value = $matrixInput.value;
    render(value);
    } 
});


