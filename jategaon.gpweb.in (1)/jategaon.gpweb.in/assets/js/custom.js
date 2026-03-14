$(document).ready(function() {


   //MainbannerSlider
    $("#MainbannerSlider").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 3000,
        navigationText: [
                "<i class='ion-ios-arrow-left'></i>",
                "<i class='ion-ios-arrow-right'></i>"
            ]
            // transitionStyle: "fade"
            //transitionStyle: "fadeUp"
            //transitionStyle: "goDown"
            //transitionStyle: "backSlide"
    });

    //bannerSlider
    $("#bannerSlider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 3000,
        transitionStyle: "backSlide",
        navigationText: [
                "<i class='ion-ios-arrow-left'></i>",
                "<i class='ion-ios-arrow-right'></i>"
            ]
            // transitionStyle: "fade"
            //transitionStyle: "fadeUp"
            //transitionStyle: "goDown"
            //transitionStyle: "backSlide"
    });

    //


    //



    //testimonial-slider
    $("#testimonial-slider").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        autoPlay: true,
        transitionStyle: "backSlide",
    });



    //caves-slider
     $("#Ajanta-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        autoPlay: true,
        transitionStyle: "goDown",
        pagination:true,
        navigationText: [
            "<i class='ion-ios-arrow-left'></i>",
            "<i class='ion-ios-arrow-right'></i>"
        ]
    });

    //caves-slider
    $("#Ellora-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        autoPlay: true,
        transitionStyle: "goDown",
        pagination:true,
        navigationText: [
            "<i class='ion-ios-arrow-left'></i>",
            "<i class='ion-ios-arrow-right'></i>"
        ]
    });

    // Fixed Sidebar

    //parallax scrolling bg
    var $window = $(window); //You forgot this line in the above example

    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '100% ' + yPos + 'px';
            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });

    //positioned parallax element
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.parallax-shape1 img').css('top', -(scrolled * 0.55) + 'px');
    }
    $(window).scroll(function(e) {
        parallax();
    });

    //popularProductsSlider
    $("#popularProductsSlider").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds         
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='ion-ios-arrow-left'></i>",
            "<i class='ion-ios-arrow-right'></i>"
        ]
    });

    //brandsSlider
    $("#brandsSlider").owlCarousel({
        autoPlay: 7500, //Set AutoPlay to 3 seconds         
        items: 6,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='ion-ios-arrow-left'></i>",
            "<i class='ion-ios-arrow-right'></i>"
        ]
    });

    AOS.init();


    $('.project-fig h3 span').counterUp({ delay: 100, time: 4000 });




    //target link slide on click
    $('.down-arrow-box a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 1000);
        return false;
    });




    //scrollUp
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();

            $(".navigationBar").addClass("navigationBarScroll");

        } else {
            $('.scrollup').fadeOut();

            $(".navigationBar").removeClass("navigationBarScroll");
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);


        return false;
    });


    //Fancybox
    /*
     *  Simple image gallery. Uses default settings
     */

     $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
      helpers: {
        title: {
          type: 'outside'
        },
        overlay: {
          speedOut: 0
        }
      }
    });

    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
      openEffect: 'none',
      closeEffect: 'none',
      helpers: {
        title: {
          type: 'over'
        }
      }
    });

    // Set custom style, close if clicked, change title type and overlay color
    $(".fancybox-effects-c").fancybox({
      wrapCSS: 'fancybox-custom',
      closeClick: true,
      openEffect: 'none',
      helpers: {
        title: {
          type: 'inside'
        },
        overlay: {
          css: {
            'background': 'rgba(238,238,238,0.85)'
          }
        }
      }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
      padding: 0,
      openEffect: 'elastic',
      openSpeed: 150,
      closeEffect: 'elastic',
      closeSpeed: 150,
      closeClick: true,
      helpers: {
        overlay: null
      }
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

     $('.fancybox-buttons').fancybox({
      openEffect: 'none',
      closeEffect: 'none',
      prevEffect: 'none',
      nextEffect: 'none',
      closeBtn: false,
      helpers: {
        title: {
          type: 'inside'
        },
        buttons: {}
      },
      afterLoad: function() {
        this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
      }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

     $('.fancybox-thumbs').fancybox({
      prevEffect: 'none',
      nextEffect: 'none',
      closeBtn: false,
      arrows: false,
      nextClick: true,
      helpers: {
        thumbs: {
          width: 50,
          height: 50
        }
      }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
     $('.fancybox-media')
     .attr('rel', 'media-gallery')
     .fancybox({
      openEffect: 'none',
      closeEffect: 'none',
      prevEffect: 'none',
      nextEffect: 'none',
      arrows: false,
      helpers: {
        media: {},
        buttons: {}
      }
    });

    /*
     *  Open manually
     */

     $("#fancybox-manual-a").click(function() {
      $.fancybox.open('1_b.jpg');
    });

     $("#fancybox-manual-b").click(function() {
      $.fancybox.open({
        href: 'iframe.html',
        type: 'iframe',
        padding: 5
      });
    });

     $("#fancybox-manual-c").click(function() {
      $.fancybox.open([
      {
        href: '1_b.jpg',
        title: 'My title'
      }, {
        href: '2_b.jpg',
        title: '2nd title'
      }, {
        href: '3_b.jpg'
      }
      ], {
        helpers: {
          thumbs: {
            width: 75,
            height: 50
          }
        }
      });
    });

    
});
$('#sectionChooser, #sectionChooser3').change(function(){
    var myID = $(this).val();
    $('.panel').each(function(){
        myID === $(this).attr('id') ? $(this).show() : $(this).hide();
    });
});
$('#sectionChooser2, #sectionChooser4').change(function(){
    var myID = $(this).val();
    $('.panel').each(function(){
        myID === $(this).attr('id') ? $(this).show() : $(this).hide();
    });
});

//animation js code 

  AOS.init();