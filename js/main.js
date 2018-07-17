$('[data-slick]').slick({
    fade: true,
    autoplay:true,
    speed: 300,
    nextArrow: '<span class="rightarrow"> <i class="fa fa-arrow-right "></i> </span>',
    prevArrow: '<span class="nextarrow"> <i class="fa fa-arrow-left "></i> </span>'
  });



  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        }
    }]
});





$('.govt-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
        
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 5
            }
        },
        
        {
        breakpoint: 1025,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 769,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 641,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 361,
        settings: {
            slidesToShow: 1
        }
    }
]
    

  });


  
  
  function switchStyleSheets(theme) {
    $('link[title="theme"]').attr('href', theme);
}


$(document).ready(function () {

    $('#black').click(function (event) {
        event.preventDefault();
        switchStyleSheets('css/black.css');
    });

    $('#default').click(function (event) {
        event.preventDefault();
        switchStyleSheets('css/default.css');
    });

    $('#orange').click(function (event) {
        event.preventDefault();
        switchStyleSheets('css/orange.css');
    });

    $('#green').click(function (event) {
        event.preventDefault();
        switchStyleSheets('css/green.css');
    });

});

/* this changes font size of */

var originalSize = $('div').css('font-size');
// reset
$(".resetMe").click(function () {
    $('div').css('font-size', originalSize);

});

// Increase Font Size
$(".increase").click(function () {
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize) * 1.2;
    $('div').css('font-size', currentSize);

    return false;
});

// Decrease Font Size
$(".decrease").click(function () {
    var currentFontSize = $('div').css('font-size');
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize) * 0.8;
    $('div').css('font-size', currentSize);

    return false;
});





var myAudio = document.getElementById("myAudio");
myAudio.play();

var isPlaying = true;

function togglePlay() {

  if (isPlaying) {

    myAudio.pause()

  } else {

    myAudio.play();


  }

};

myAudio.onplaying = function() {
  isPlaying = true;
};

myAudio.onpause = function() {
  isPlaying = false;
};


$("#mus").click(function(){

    $(this).toggleClass("music-icon-off");

});
