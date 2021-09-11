window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }
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
            let array = [];
            for (let i = 0; i < elements.length; i++) {
                // const elements2 = Array.from(elements[i].querySelectorAll(selector));
                // array = array.concat(elements2);
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            }
            // return this; 有个小 bug，不能返回 this
            // const newApi = jQuery(array);
            // return newApi;
            array.oldApi = this; // this 是旧的 api
            return jQuery(array);
        },
        oldApi: selectorOrArray.oldApi,
        end() {
            return this.oldApi;
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i);
            }
            return this;
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode);
                }
            })
            return jQuery(array);
        },
        print() {
            console.log(elements);
        },
        children() {
            const array = [];
            this.each((node) => {
                array.push(...node.children); // 展开操作符
                // array.push(node.children[0], node.children[1], node.children[2]);
            })
            return jQuery(array);
        }
    }
}