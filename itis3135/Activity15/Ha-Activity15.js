$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "facultyList.json",
        dataType: "json",
        success: function(data) {
            $("#faculty").html("");
            $.each(data, function() {
                $.each(this, function(key, value)
                {
                    $("#faculty").append
                    ("<img src=" + value.image + ">" +
                        "<h2>" + value.full_name + "</h2>" +
                           "<h3>" + value.department + "</h3>" +
                            "<p>" + value.bio + "</p>");
                })
            });
        }
    });
});