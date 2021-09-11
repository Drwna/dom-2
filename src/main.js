// addClass
// jQuery('.test').addClass('red').addClass('blue');

// const api = jQuery('.test'); // 不返回元素门，返回 api 对象
// api.addClass('red') // this 就是 api
//     .addClass('blue')
//     .addClass('black'); // 链式操作

// obj.fn(p1); // 函数里的 this 就是 obj
// obj.fn.call(obj, p1)



// find
// const api1 = jQuery('.test');
// api1.addClass('blue');

// const api2 = api1.find('.child').addClass('red');

// api1.addClass('green');
// api1 添加 blue 类后，再给 test 类下的 child 类 添加一个 red 类
// 之后再重新用 api1 添加 green 类，这个 green 类会添加在 child 类后边
// 重新构造函数实现
// jQuery('.test').find('.child').addClass('red').addClass('green');


// end
// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('greed')
//     .end() // 回到上一层，在 test 上添加 yellow
//     .addClass('yellow')


// each
// const x = jQuery('.test')
//     .find('.child')

// x.each((e) => console.log(e))


// parent
// const x = jQuery('.test')
// x.parent().print()


// children
jQuery('.test').children().print();





