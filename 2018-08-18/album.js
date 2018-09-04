function anhien(){
    var div = document.getElementById('js-header');
    console.log(div.className)
    if (div.className === 'd-none'){
        div.className = 'd-block';
    } else {
        div.className = 'd-none';
    }
}