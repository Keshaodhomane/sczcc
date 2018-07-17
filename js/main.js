


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
    slidesToShow: 5,
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




// Slider Options
$(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    fade: true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"> <span class="Thumbnail"></span></button>',
    nextArrow: '<button class="NextArrow"> <span class="Thumbnail"></span></button>',
    // Custom Dots With Thumbnails Tool Tip
    customPaging: function (slider, i) {
        var thumbnail = $(slider.$slides[i]).data('thumbnail');
        return '<a href="javascript:void(0)"><img src="' + thumbnail + '"></a>';
    },
});

// Arrows Thumbnails Trick
var PrevThumbinalFirst = $(".Modern-Slider .item:last-child").children(".img-fill").children("img").attr("src");
$(".Modern-Slider .PrevArrow .Thumbnail").css({
    "background-image": "url(" + PrevThumbinalFirst + ")"
})
var NextThumbinalFirst = $(".Modern-Slider .item:first-child").next().children(".img-fill").children("img").attr("src");
$(".Modern-Slider .NextArrow .Thumbnail").css({
    "background-image": "url(" + NextThumbinalFirst + ")"
})
$(".Modern-Slider").on('afterChange', function (event, slick, currentSlide) {
    var PrevThumbinal = $(".Modern-Slider .item.slick-active").prev(".item").children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .PrevArrow .Thumbnail").css({
        "background-image": "url(" + PrevThumbinal + ")"
    })
    var NextThumbinal = $(".Modern-Slider .item.slick-active").next(".item").children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .NextArrow .Thumbnail").css({
        "background-image": "url(" + NextThumbinal + ")"
    })

});