function anhien(){
    var div = document.getElementById('js-header');
    console.log('div.style.display')
    if (div.style.display === 'block')
    {
        div.style.display = 'none'
    }
    else if (div.style.display === 'none')
    {
        div.style.display = 'block'
    }
}