 let aboutOffset = $('.navbar-change').offset().top

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset -50)
    {
        $('.navbarr').css("backgroundColor", 'rgba(0,0,0,0.6');
        $('.navbarr').css("width", '100%  ');
        $('.arraw-btn').fadeIn(1000);
    }
    else
    {
        $('.navbarr').css("backgroundColor", 'transparent')
        $('.arraw-btn').fadeOut(1000);
    }
    // console.log(wScroll);
})


$('a').click(function(e){
    let aHref = $(e.target).attr("href");
    let sectionOffset= $(aHref).offset().top;
    $(window).scrollTop(aboutOffset);
    $('html,body').animate({screenTop:sectionOffset} , 20000)
})


$(document).ready(function(){
    $('#loading .spinner').fadeOut(1000 , function(){
        $('#loading').fadeOut(1000 , function(){
            $('body').css('overflow-y' , 'auto')
        });
    })
    
})
