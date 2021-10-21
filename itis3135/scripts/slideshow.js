$(function()
{
    var pics = [
    ["images/lancer_parkingdeck2.jpg"],
    ["images/drift_z.jpg"],
    ["images/purple_silvia.jpg"],
    ["images/white_supra.jpg"],
    ["images/purplehydra-openclipart-org.png"],
    ["images/charlotte_logo.jpg"]
    ];

    var count = pics.length;
    var cur = 0;

    //preload images
    var $imgs = new Array();
    for(var i = 0; i < count; i++)
    {
        var $image = $("<img>").attr("src", pics[i][0]);
        $imgs.push($('<img>').attr('src', pics[i][0]));
    }

    // add the main ul
    $("#pics_holder").append("<ul>");
    // it must be as wide as all children for it to span horizontally
    $("#pics_holder ul").css("width",(count)*200);

    // add each image as an li
    for(var i = 0; i < count; i++)
    {
        var $li = $("<li>").append($imgs[i]);
        $("#pics_holder ul").append($li);
    }

    // put the last one in front to start
    var $last_li = $("<li><img src='"+pics[pics.length-1][0]);
    $("#pics_holder ul").prepend($last_li);

    $('li:nth-child(2)').hide();
    $('li:nth-child(3)').hide();
    $('li:nth-child(4)').hide();
    $('li:nth-child(5)').hide();
    $('li:nth-child(6').hide();
    $('li:last').hide();
})

$(function()
{
    $('a[title=lancer]').click(function()
    {
        $('li:nth-child(2)').show();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').hide();
        $('li:last').hide();
        cur = 2;
    });
})

$(function()
{
    $('a[title=z]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').show();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').hide();
        $('li:last').hide();
        cur = 3;
    });
})

$(function()
{
    $('a[title=silvia]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').show();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').hide();
        $('li:last').hide();
        cur = 4;
    });
})

$(function()
{
    $('a[title=supra]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').show();
        $('li:nth-child(6').hide();
        $('li:last').hide();
        cur = 5;
    });
})

$(function()
{
    $('a[title=hydra]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').show();
        $('li:last').hide();
        cur = 5;
    });
})

$(function()
{
    $('a[title=hydra]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').show();
        $('li:last').hide();
        cur = 5;
    });
})

$(function()
{
    $('a[title=charlotte]').click(function()
    {
        $('li:nth-child(2)').hide();
        $('li:nth-child(3)').hide();
        $('li:nth-child(4)').hide();
        $('li:nth-child(5)').hide();
        $('li:nth-child(6').hide();
        $('li:last').show();
        cur = 5;
    });
})