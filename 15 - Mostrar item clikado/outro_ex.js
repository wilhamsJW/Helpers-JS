for (i = 0; i < document.getElementById('container').children.length; i++) {

    /*  console.log('i' + i)
        document.getElementById('container').children[i].onclick = function(){alert('Número ' + i + ' was clicked')} */


    (function (index) {

        console.log('index', index)

        document.getElementById('container').children[i].onclick = function () {
            alert(index);
        }
    })(i);

} 

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures