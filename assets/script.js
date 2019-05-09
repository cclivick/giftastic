$(document).ready(function() {
        
//Create array of reaction buttons    
        var buttonArray = [
            "shocked",
            "angry",
            "happy",
            "sad",
            "bored",
            "miserable",
            "confused",
            "excited",
            "irritated",
            "annoyed",
            "intrigued",
            "elated",
            "bashful",
            "fatigued",
            "gloomy",
            "jealous",
            "lonely",
            "naughty",
            "panicked",
            "serene",
            "victorious",
            "violent",
            "zany"
        ]

//For loop to create buttons from array items
        for(var i = 0; i < buttonArray.length; i++) {
            var buttons = $('<button class=reactionBtn id=' + buttonArray[i] + '>' + buttonArray[i] + '</button>');
            buttons.appendTo($('#buttonRow'));
        }
//Create function which takes user input from form and adds text to buttonArray array
        $('#submitBtn').click(function() {
            var newButtonVal = $("#btnAdder").val().trim();
            buttonArray.push(newButtonVal);
            var newButton = $('<button class=reactionBtn id=' + newButtonVal + '>' + newButtonVal + '</button>');
            newButton.appendTo($('#buttonRow'));
        })
//Create function which generates gifs when user clicks reactionBtns
        //Create url for giphy API on button click
        $("button").click(function() {
            console.log("clicked");
            var buttonText = $(this).attr('id');
            var apikey = "vZnidhqhpNZPO651y0Y99NnMGh197Sz4";
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
              buttonText + "&api_key=" + apikey + "&limit=10";
        //Get array of objects from giphy API
            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response) {
                console.log(response);
                //Add gifs to page
                var results = (response.data);

                for(var j = 0; j < results.length; j++) {
                    var reactionGifDiv = $("<div>");
                    var rated = $("<p>");
                    $("p").text("Rated: " + results[j].rating);
                    var reactionGif = $("<img src=" + results[j].images.fixed_height.url + ">");
                    rated.appendTo(reactionGifDiv);
                    reactionGif.appendTo(reactionGifDiv);
                    reactionGifDiv.prependTo($("#gifDiv"));
                }

        })

})
});
