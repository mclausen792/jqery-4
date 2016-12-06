$(document).ready(function () {


    //Question #1
    $('#submitBtn').click(function () {
        var text = $("#textInput").val();
        console.log(text);
        $("<h3>" + text + "</h3>").insertAfter("#submitBtn");
    })


    //Question #2
    $(".chex input").click(function () {
        $("h2").toggleClass("hidden");
    });



    //Question #3
    $(".table-striped").append("<tr><td>Olive</td><td>9</td><td>Hangry</td></tr>");



    //Question #4
    $(".table-striped tbody").children().each(function () {
        var hungerLevel = $(this).children("td:nth-child(3)");
        if (hungerLevel.text() === "Content") {
            $(hungerLevel).css("color", "#629632");
        } else {
            $(hungerLevel).css("color", "#CD2626");
        }
    })




    //Question #5
    $(".btn-warning").click(function () {
        $(".table-striped tbody").children().each(function () {
            var weight = $(this).children("td:nth-child(2)");
            if ($(weight).text() < 10) {
                $(this).hide();
            }
        })
    });




    //Question #6
    $(".btn-success").click(function () {
        $("tbody").children().each(function () {
            var name = $(this).children("td:nth-child(1)");
            $(name).text($(name).text().toUpperCase() + "!!!");
        })
    })




    //Question #7
    $(".btn-primary").click(function () {
        $(".table-striped").toggle();
    })




    //Question #8
    $("#disableUs input").prop("disabled", true);

    $("#disableUs a").click(function (e) {
        e.preventDefault();
    });

    //or

    $("#disableUs a").click(function () {
        return false;
    })




    //Question #9

    $(".dropdown").change(function () {
        var value = $(this).find("option:selected").text();
        $("<h3>" + value + "</h3>").insertAfter(".dropdown");
    });





    //Question #10
    //Question #11


    $("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
    $("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");

    var count = 0;
    $("#alertList").children().each(function () {
        count += 1;
        update();
    });

    $("#alert10").click(function () {
        alert(count);
    });

    $(".btn-secondary").click(function () {
        $("#alertList").append("<li>New Item</li>");
        count += 1;
        update();
    });

    $(".btn-danger").click(function () {
        $("#alertList").children('li:last-child').remove();
        count -= 1;
        update();
    });

    //Question #12:

    function update() {
        $("#displayList12").text("The count is: " + count);
    }



});
