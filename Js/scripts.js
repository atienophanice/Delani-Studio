$(document).ready(function() {
    $("#design, #des").click(function() {
        $("#hidden1").toggle();
        $("#des").toggle();
    });

    $("#development,#dev").click(function() {
        $("#hidden2").toggle();
        $("#dev").toggle();
    });

    $("#product,#prod").click(function() {
        $("#hidden3").toggle();
        $("#prod").toggle();
    });
    $("#work1").hover(function() {
        $(".text1").toggle("slow");
    })
    $("#work2").hover(function() {
        $(".text2").toggle("slow");
    })
    $("#work3").hover(function() {
        $(".text3").toggle("slow");
    })
    $("#work4").hover(function() {
        $(".text4").toggle("slow");
    })
    $("#work5").hover(function() {
        $(".text5").toggle("slow");
    })
    $("#work6").hover(function() {
        $(".text6").toggle("slow");
    })
    $("#work7").hover(function() {
        $(".text7").toggle("slow");
    })
    $("#work8").hover(function() {
        $(".text8").toggle("slow");
    });
});
``