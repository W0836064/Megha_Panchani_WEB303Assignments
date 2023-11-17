$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '800px',
            height: '450px',
            opacity: 100
        });


        //modal code goes here
        e.preventDefault();
        (function (someParameter) {
            console.log(someParameter);
            
            var $content_ = $content.detach();
            var modal = new Modal();
            
            
            modal.open({
                content: $content_,
                width: 800,
                height: 'auto',
            });
        })("ValuePassedIn");

        var $contentH11 = `<h1>Megha Panchani - Indian Festival </h1>`;

        $('.modal').prepend($contentH11);
        
        $contentH11.addClass("modalHead");
    });
});
