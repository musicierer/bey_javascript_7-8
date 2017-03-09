$(document).ready(function(){

$('#firstname').mousemove(function(e){

var hint = $(this).attr('name');

$('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});

$('#hint').show().text(hint);

}).mouseout(function(){
$('#hint').hide();
});
});

$(document).ready(function(){

$('#lastname').mousemove(function(e){

var hint = $(this).attr('name');

$('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});

$('#hint').show().text(hint);

}).mouseout(function(){
$('#hint').hide();
});
});

$(document).ready(function(){

$('#address').mousemove(function(e){

var hint = $(this).attr('name');

$('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});

$('#hint').show().text(hint);

}).mouseout(function(){
$('#hint').hide();
});
});
