//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида (... это просто для сокращения здесь. Вы выводите все числа от 1 до 50. Все. Три точки мы не выводим!!!!!):
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.



function t1() {
    let a = document.querySelector('.out-1');
    let k = 0;
    let c = '';
    while (k < 50) {
        k++;
        c += k + "_";
    }
    a.innerHTML = c;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

function t2() {
    let a = document.querySelector('.out-2');
    let k = 0;
    let c = '';
    while (k < 46) {
        k = k + 2;
        c += k + "_";
    }
    a.innerHTML = c;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

function t3() {
    let a = document.querySelector('.out-3');
    let k = 26;
    let c = '';
    while (k > 7) {
        k--;
        c += k + "_";
    }
    a.innerHTML = c;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.


function t4() {
    let a = document.querySelector('.out-4');
    let k = 80;
    let c = '';
    while (k > 35) {
        k = k - 3;
        c += k + "_";
    }
    a.innerHTML = c;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.



function t5() {
    let a = document.querySelector('.out-5');
    let k = 0;
    let c = '';
    while (k < 17) {
        k++;

        if (k % 2 === 0) {
            c += k + '_**';
        } else {
            c += k + '_*';
        }
    }
    a.innerHTML = c;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.

function t6() {
    let d = '';
    let a = document.querySelector('.out-6');
    let b = document.querySelector('.i-6').value;
    let c = '******<br>';
    let k = 0;
    while (k < b) {
        k++;
        d += c;
    }
    a.innerHTML = d;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.


function t7() {
    let b = '';
    let c = document.querySelector('.out-7');
    let a = document.querySelector('.i-7').value;
    let k = a;
    while (k > 0) {
        k--;
        b += k + '_';
    }
    c.innerHTML = b;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.

function t8() {
    let b = '';
    let c = document.querySelector('.out-8');
    let a1 = document.querySelector('.i-81').value;
    let a2 = document.querySelector('.i-82').value;
    let k = a1;
    while (k <= a2) {

        b += k + '_';
        k++;
    }
    c.innerHTML = b;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.

function t9() {
    let a91 = document.querySelector('.i-91').value;
    let a92 = document.querySelector('.i-92').value;

    let b = '';
    let c = document.querySelector('.out-9');
    if (a92 > a91) {
        let k = a91;
        while (k <= a92) {
            b += k + '_';
            k++;
        }
        c.innerHTML = b;
    } else {
        let k = a92;
        while (k <= a91) {
            b += k + '_';
            k++;
        }
        c.innerHTML = b;
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let a = document.querySelector('.out-10');
    let k = 1950;
    b = '';
    while (k <= 1966) {
        b += k + '_';
        k = k + 2;
    }
    a.innerHTML = b;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_



function t11() {
    let b = document.querySelectorAll('.div-11');
    let a = document.querySelector('.out-11');
    let c = '';
    let k = 0;

    while (k < b.length) {
        c += b[k].innerHTML + '_';
        k++;
    }
    a.innerHTML = c;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'



function t12() {
    let b = document.querySelectorAll('.div-12');
    let c = '';
    let k = 0;

    while (k < b.length) {
        b[k].style.background = 'orange';
        k++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...



function t13() {
    let a = document.querySelectorAll('.i-13');
    let k = 0;

    while (k < a.length) {
        a[k].value = k + 1;
        k++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let a = document.querySelectorAll('.i-14');
    let k = 0;
    let c = document.querySelector('.out-14');

    while (k < a.length) {
        if (a[k].checked) {
            c.innerHTML = a[k].value;
        }
        k++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.

function t15() {
    let a = document.querySelector('.out-15');

    let c = '';
    let x = 0;
    while (x < 3) {
        let k = 77;
        while (k < 100) {

            c += k + "_";
            k = k + 11;
        }
        x++;

    }
    a.innerHTML = c;
}

document.querySelector('.b-15').onclick = t15;



document.querySelector('.b-15').onclick = t15;
