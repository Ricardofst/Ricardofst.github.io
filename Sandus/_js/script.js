
function menubtn() {
    var x = document.getElementById("menubar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
$(window).resize(function () {
    if ($(window).width() < 795)
        $("#menubar").hide();
    else
        $("#menubar").show();
});
function myFunction() {
    var main = $("main:first");
    var position = main.offset();
    var top = position.top - $(document).scrollTop();
    if (top < 69) {
        document.getElementById("a-home").innerHTML = "<img src='_imagem/logo.ico' alt='Logo|Home'>";
        $("#btn-menu").css("padding", "0 15px");
        $("a[class='a-nav']").css("padding", "23px 0").css("margin-left", "23px");
    }
    else {
        document.getElementById("a-home").innerHTML = "Home";
        $("#btn-menu").css("padding", "15px 15px");
        $("a[class='a-nav']").css("padding", "10px 15px").css("margin-left", "2px").css("border", "1px solid transparent");

    }
}
function showStep(step){
    $(step).show();
    $('html, body').animate({scrollTop: $(step).offset().top},1000);
}