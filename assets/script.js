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
            var buttons = $('<button id=reactionBtn>' + buttonArray[i] + '</button>');
            buttons.appendTo($('#buttonRow'));
        }
//Create function which takes user input from form and adds text to buttonArray array
        $('#submitBtn').click(function() {
            var newButtonVal = $("#btnAdder").val().trim();
            buttonArray.push(newButtonVal);
            var newButton = $('<button id=reactionBtn>' + newButtonVal + '</button>');
            newButton.appendTo($('#buttonRow'));
        })

});
