var btn = document.querySelector(".header_toggle-btn");
var body = document.querySelector("body");

btn.addEventListener("click", show);

function show() {
    var re = new RegExp('menu-open');
    var str = body.className;
    var result = testInput(re, str);
    body.className = result ? '' : 'menu-open'
}

function testInput(re, str) {
    return re.test(str);
}