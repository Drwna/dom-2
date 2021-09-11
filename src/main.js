jQuery('.test').addClass('red').addClass('blue');

// const api = jQuery('.test'); // 不返回元素门，返回 api 对象
// api.addClass('red') // this 就是 api
//     .addClass('blue')
//     .addClass('black'); // 链式操作

// obj.fn(p1); // 函数里的 this 就是 obj
// obj.fn.call(obj, p1)



console.log(jQuery('.test').find('.child'));