//外面这层是等html元素加载完成,否则js获取不到元素节点
document.addEventListener('DOMContentLoaded', function () {
    var text = document.getElementsByClassName('text'); //获取到class name为text的节点

    // 给获取到的第一个节点安排一个事,就是告诉它有人点击了就把这个节点里面的字改一下.
    // js中这种行为成为绑定事件,右边的function就是事件触发后要处理的东西,可以称为事件回调函数
    text[0].onclick = function () {
        this.innerHTML = "我是赵铁柱!";
    }
})