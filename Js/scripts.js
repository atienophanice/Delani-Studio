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