$(document).ready(function(){
    $('js-click').click(function(){
        $('js-lamp').attr("src", function(i, val){
            if (val.includes("on")){
                return "./pick_bulbon.gif"
            }
            else {
                return "./pick_bulboff.gif"
            }
        })
    })
})