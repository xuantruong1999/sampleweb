$(document).ready(function(){
    const element = $("#xyz");
    element.mousemove( function(e){
        let x = -e.offsetX + "px";
        let y = -e.offsetY + "px";
        let combine = x + " " + y;
        //debugger
        element.css('background-size', '1000px');
        element.css('background-position', combine);
    });

    element.mouseleave( e => {
        element.css('background-size', 'contain');
        element.css('background-position', '0px 0px');
    })
  //

});

function add(){
    let currentValue = $("#quantity").text();
    let newValue = parseInt(currentValue) + 1;
    if(currentValue != null){
        $("#quantity").html(newValue);
    }
}
function subtract(){
    let currentValue = $("#quantity").text();
    let newValue = parseInt(currentValue) - 1;
    if(newValue <= 0){
        return;
    }
    else{
        $("#quantity").html(newValue);
    }
}

function bind(event, id){
    debugger
    let content = event.toElement.innerText;
    let selector = "#"+ id; 
    $(selector).html(content);
}