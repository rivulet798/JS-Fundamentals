console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const p1 = new Promise(() => {
//     console.log('Promise is created');
// })

// console.log(p1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p2 = Promise.resolve('Promise Data');
// console.log(p2);
// p2.then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const p3 = Promise.reject('Promise Error');
// console.log(p3);
// p3
// .then(console.log)
// .catch(console.log);


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p4 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, 'Promise Data');
// })

// console.log(p4);
// p4.then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess(data){
//         console.log(`Promise is resolved with data: ${data}`);
//         return data;
//     },
//     onError(err){
//         console.log(`Promise is rejected with error: ${err}`);
//     }
// }

// document.querySelector('#btn-create-promise').addEventListener('click', () => {
//     handlePromise.promise = new Promise((resolve,reject) => {
//         console.log('Promise is created');
//         handlePromise.resolve = resolve;
//         handlePromise.reject = reject;
//     })
//     .then(handlePromise.onSuccess)
//     .then(handlePromise.onSuccess)
//     .catch(handlePromise.onError);
// });

// document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
//     handlePromise.resolve?.('Some data');
// });

// document.querySelector('#btn-reject-promise').addEventListener('click', () => {
//     handlePromise.reject?.('Some error');
// });

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// const p7 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, 'My name is');
// })

// function onSuccess(data){
//     throw new Error('Some Error');
//     return `${data} Masha`;
// }

// function print(data){
//     console.log(data);
// }

// p7.then(onSuccess)
//   .catch((err) => {
//       console.log(err);
//       return 'Default data';
//   })
//   .then(print);

// Task 08
// Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения
// Обработайте данное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData(promise) {
//     promise.then?.(console.log);
// }

// const obj9 = {
//     name: 'Anna'
// };

// getPromiseData(Promise.resolve(obj9));


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// const p10_1 = new Promise((resolve) => {
//     setTimeout(resolve, 2000, { name: 'Anna'});
// })

// const p10_2 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, { age: 16});
// })

// const p10 = Promise.all([p10_1, p10_2])
//         .then(([ob1, ob2]) => {
//             console.log({...ob1, ...ob2});
//         });


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

// const p11_1 = new Promise((resolve) => {
//     setTimeout(resolve, 2000, { name: 'Anna'});
// })

// const p11_2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 3000, 'Error');
// })

// const p11 = Promise.allSettled([p11_1, p11_2])
//         .then((data) => {
//             console.log(data);
//         })
//         .catch(console.log);


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

const p12_1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, 'Promise Data');
})

const p12_2 = new Promise((resolve, reject) => {
    document.querySelector('#btn-cancel-promise').addEventListener('click', () => {
        reject('Promise Error');
    });
});

const p12 = Promise.race([p12_1, p12_2])
        .then((data) => {
            console.log(data);
        })
        .catch(console.log);


// Task 13
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис переходит в состояние rejected со значением "Promise Error".
// Запустите оба эти промисы в параллель и получите результаты тех, которые завершаться успешно

const p13_1 = new Promise((resolve) => {
    setTimeout(resolve, 2000, { name: 'Anna'});
});

const p13_2 = Promise.reject('Promise Error');

const p13 = Promise.allSettled([p13_1, p13_2])
    .then((data) => {
        data = data.filter(p => p.status == 'fulfilled');
        data.forEach(p => console.log(p.value));
    });


// Task 14
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис возвращает дефолтный объект { name: "Unknown" } через 1с.
// Запустите оба эти промисы в параллель и получите результат того, который отработает первым

const p14_1 = new Promise((resolve) => {
    setTimeout(resolve, 2000, { name: 'Anna'});
});

const p14_2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, { name: 'Unknown'});
});

const p14 = Promise.race([p14_1, p14_2])
    .then((data) => {
        console.log(data);
    });