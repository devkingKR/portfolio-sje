;(function(window, $){

    function scrollMotion() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.config({nullTargetWarn: false});

        let secBrand = gsap.utils.toArray(".section-story .scroll-list");
        let boxBrand = document.querySelector(".section-story .scroll-list");
        let boxMargin = ($('.about-page').innerWidth() - $('.section-story .sec-cont-outer .scroll-wrap').innerWidth()) / 2;
        let __bottomBrand = -(((boxBrand.offsetWidth) * secBrand.length) - ($('.about-page').innerWidth()) + ( boxMargin ));
        var __topBrand = 0;

        ScrollTrigger.create({
            trigger: ".section-story",
            start: "top top",
            end: "bottom 250%",
            scrub: 0.5,
            toggleClass: 'fixed',
            onUpdate: function(self){
                gsap.to(".section-story .scroll-list",{
                    x: (__bottomBrand - __topBrand) * self.progress + __topBrand,
                })
            },
        });
    }

    var page_init = function page_init(){
        var innerWidthFn = $(window).innerWidth();
            scrollMotion();
    };
    window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);
        },100);
    
        page_init();
    }

})(window, jQuery)


    



