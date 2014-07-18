 $(document).ready(function(){
    site.resize();

    $(window).resize(function(){
        site.resize();
    });
});

var site = {
    resize: function(){
        var new_margin = Math.ceil(($(window).height() - $('.vc').height()) / 2);
        $('.vc').css('margin-top', new_margin + 'px');
    }
};