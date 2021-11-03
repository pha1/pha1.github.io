$(document).ready(function() {

        $("#image_list a").each(function() {

                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");

                // preload the image for each link
                var galleryImage = new Image;
                galleryImage.src = imageURL;

                        // create an array of the images

                // set up the event handlers for each link
                $(this).click(function(evt){

                        // get the image URL and caption for each image and animate the caption
                        
                        $("#caption, #image").fadeOut(3000, function()
                        {
                                $("#image").attr("src", imageURL);
                                $("#caption").text(caption);
                                $("#caption").css("font-size", "1.2em");
                                $("#caption, #image").fadeIn(3000, function(){
                                        $("#caption").delay(3000).animate({
                                                fontSize: "2em"
                                        }, 1000);
                                });
                        })
        

                        // This will run expectedly -> It loads the image instantly then fades.
                        /*
                        $("#caption, #image").show(function() {
                                $("#image").attr("src", imageURL);
                                $("#caption").text(caption);
                                $("#caption, #image").fadeOut(3000)
                                $("#caption, #image").fadeIn(3000)
                                
                        })*/
                        // cancel the default action of each link
                        evt.preventDefault();
                });
        });

        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready