window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector);
    // api 可以操作 elements
    return {
        // 闭包： 函数访问外部变量
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this;
        }
    }
}

// window.jQuery = function (selector) {
//     const elements = document.querySelector(selector);
//     const api = {
//         // "addClass": function () {
//         //     console.log(elements);
//         // }
//         addClass() {
//             console.log(elements)
//         }
//     }
//     return api;
// }


// window.jQuery = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     // api 可以操作 elements
//     const api = {
//         // 闭包： 函数访问外部变量
//         addClass: function(className) {
//             for (let i = 0; i < elements.length; i++) {
//                 const element = elements[i];
//                 element.classList.add(className);
//             }
//             return undefined;
//         }
//     }
//     return api;
// }


// window.jQuery = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     // api 可以操作 elements
//     const api = {
//         // 闭包： 函数访问外部变量
//         addClass(className) {
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.add(className);
//             }
//             return api;
//         }
//     }
//     return api;
// }

// window.jQuery = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     // api 可以操作 elements
//     const api = {
//         // 闭包： 函数访问外部变量
//         addClass(className) {
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.add(className);
//             }
//             return this; // this 就是 api
//         }
//     }
//     return api;
// }