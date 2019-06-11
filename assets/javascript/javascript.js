// Document Ready Function
$(document).ready(function () {

    // Button click function
    $('button').on('click', function () {

        // Setting Variables for search
        var nyr = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nyr + "&api_key=Se6UXFtqd1P37nNdpRREtiBYufRn38B7&limit=5";

        //Ajax search to scour Giphy API for gif's relating to the search term
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            // Function executes when response is returned
            .then(function (response) {

                // Log the response to the console
                console.log(response)

                // Variable in for loop
                var results = response.data;

                // Loop to create Giphy results on page
                for (var i = 0; i < results.length; i++) {

                    var nyrDiv = $('<div/>');

                    var p = $('<p/>');

                    var nyrImage = $('<img/>');

                    nyrImage.addClass('anImg')

                    nyrImage.attr('src', results[i].images.fixed_height.url);

                    nyrImage.attr('data-still', results[i].images.fixed_height_still.url)

                    nyrImage.attr('data-animate', results[i].images.fixed_height.url)

                    nyrDiv.append(p);

                    nyrDiv.append(nyrImage);

                    nyrDiv.prependTo($('#gifs'));
                }
                // On click function that pauses and starts gifs
                $('.anImg').on('click', function () {

                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state == 'still') {

                        $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            });
    });

    // Functions for new buttons
    $('#aButton').on('click', function () {
        var nhlButton = $("#gif-search").val();

        var newButton = $("<button/>").addClass("button nyr").attr('data-name', nhlButton).html(nhlButton)

        $("#buttons").append(newButton);
        console.log("Work");

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nhlButton + "&api_key=Se6UXFtqd1P37nNdpRREtiBYufRn38B7&limit=10";
        console.log(nhlButton);

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

            .then(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var nyrDiv = $('<div/>');

                    var p = $('<p/>');

                    var nyrImage = $('<img/>');

                    nyrImage.addClass('anImg')

                    nyrImage.attr('src', results[i].images.fixed_height.url);

                    nyrImage.attr('data-still', results[i].images.fixed_height_still.url)

                    nyrImage.attr('data-animate', results[i].images.fixed_height.url)

                    nyrDiv.append(p);

                    nyrDiv.append(nyrImage);

                    nyrDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function () {

                // On click function that pauses and starts gifs
                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state == 'still') {

                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }

                });

            });

        $("#gif-search").val("");
        return false;

    })
});