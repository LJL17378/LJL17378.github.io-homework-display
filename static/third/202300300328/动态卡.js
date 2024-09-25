var title = document.querySelectorAll('ul li');
var content = document.querySelectorAll('ol li');

title.forEach(function (item,key) {
    item.onclick = function () {
        title.forEach(function (i,k) {
            i.className = '';
            content[k].className = '';
        });
        item.className = 'active';
        content[key].className = 'active';
    }
})
