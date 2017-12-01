$(function () {
    console.log('DOM');


 //load picture of a day

    var picturesUrl = 'https://api.nasa.gov/planetary/apod?api_key=gtyU9XnD6AhWCM2Gn35INu37Mv5FlPAzXRVwICaM&date';

    function loadPicture() {
        var $ajax = $.ajax({
            url: picturesUrl,
            dataType : "json",
            method: 'GET'
        });

        $ajax.done(function (response) {
            console.log(response);
            console.log(response.url);
            function insertPicture() {
              /*  var div = $('.pict_day');
                var picture = $('<img src=' + response.url + '>');
               div.append(picture);
                console.log(picture);*/


                $('#welcome').css('background-image', 'url(' + response.url + ')');
            }
            insertPicture();
        });

        $ajax.fail(function (err) {
            console.log(err);
        });

    }

    loadPicture();


  //loading Mars pictures


});
