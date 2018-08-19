function battatden(){ 
    var img = document.getElementById('js-img');
    console.log(img.src)
    if (img.src === 'http://127.0.0.1:5500/2018-08-16/pic_bulboff.gif')
    {
        img.src = 'pic_bulbon.gif'
    }
    else if (img.src === 'http://127.0.0.1:5500/2018-08-16/pic_bulbon.gif')
    {
        img.src = 'pic_bulboff.gif  '
    }
}