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
        },
        find(selector) {
            console.log(2);
            let array = [];
            for (let i = 0; i < elements.length; i++) {
                // const elements2 = Array.from(elements[i].querySelectorAll(selector));
                // array = array.concat(elements2);
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            }
            return array;
        }
    }
}