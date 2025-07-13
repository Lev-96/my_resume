(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    document.getElementById('currentYear').innerHTML = "&copy; Copyright " + new Date().getFullYear();

    document.addEventListener("DOMContentLoaded", function () {
        const hireBtn1 = document.getElementById('hireBtn1');
        const hireBtn2 = document.getElementById('hireBtn2');
        const contactBlock = document.getElementById('contacts');

        let hireText = document.querySelector('.dynamic-hire-text');
        if (!hireText) {
            hireText = document.createElement('span');
            hireText.className = 'dynamic-hire-text';
            hireText.innerHTML = "Hire Me &#8614;";
            contactBlock.prepend(hireText);
        }

        function handleHireClick(e) {
            e.preventDefault();
            contactBlock.scrollIntoView({ behavior: 'smooth' });
            contactBlock.classList.add('highlight');
            hireText.classList.add('visible');

            setTimeout(() => {
                contactBlock.classList.remove('highlight');
                hireText.remove();
            }, 5000);

        }

        if (hireBtn1) hireBtn1.addEventListener('click', handleHireClick);
        if (hireBtn2) hireBtn2.addEventListener('click', handleHireClick);
    });
    function downloadCV() {
        const link = document.createElement('a');
        link.href = '/file/Levon_Bakunts.pdf';
        link.download = 'Levon_Bakunts.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
        // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

