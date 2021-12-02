$(document).ready(function() 
{ 
    $("#nav_list li").click(function()
    {
        $("#speakerInfo").html("");

        var jsonFile = "json_files/" + $(this).children("a").attr("title") + ".json";
        $.getJSON(jsonFile, function(data)
        { 
            $.each(data.speakers, function(key, value)
            { 
                $("#speakerInfo").append(
                    "<h1>" + value.title + "</h1>" +
                    "<h2>" + value.month + "</h2>" +
                    "<h3>" + value.speaker + "</h3>" +
                    "<img src=" + value.image + ">" +
                    "<p>" + value.text + "</p>"
                )
            });
        });
    });
}); // end ready