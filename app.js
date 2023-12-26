let iter = +prompt('Введите сколько раз сработает цикл');
let sum = 0;


for (let i = 0; i < iter; i++) {
     if (i %2 == 0) {        
        sum = sum + i
    }    
}

console.log('Сумма четных чисел ' + sum);