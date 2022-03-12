// check off todo by clicking
$("ul").on('click', 'li', function() {
    $(this).toggleClass("completed");
});
//remove todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
//add todo when the enter key is pressed
$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        // if enter is pressed
        // get text from input
        var inputText = $(this).val();
        $(this).val("");
        // put inputText inside the ul...
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + " </li>");
    };
});
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});