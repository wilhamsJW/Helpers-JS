var g = document.getElementById('my_div');
console.log('fora do for->', g);
for (var i = 0, len = g.children.length; i < len; i++) {
    console.log('fdsgfdgfd');

    (function (index) {
        g.children[i].onclick = function () {
            alert(index);
        }
    })(i);

}