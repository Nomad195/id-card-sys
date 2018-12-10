$(document).ready(function(){
    var x = $(".dream");
    var big = $(".big-b");
    x.hide();
    $(big).click(function(){
$(this).hide();
$("#center-card1").show();
$("#center-card2").show();
x.show();
x.css({"margin-top": "-90px", "margin-left": "70%"});
    });


    $(x).click(function(){
        
$("#center-card1").hide();
$("#center-card2").hide();
$(big).show();
});

});