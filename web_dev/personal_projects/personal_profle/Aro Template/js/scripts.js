$(document).ready(function () {

    "use strict";

    /**
     * Automate retina js images
     */
    if (typeof retinajs == "function") {
        var imgs = $('img');
        var imgsLength = imgs.length;
        for (var imgI = 0; imgsLength > imgI; imgI++) {
            var img = imgs[imgI];
            $(img).attr('data-rjs', 2);
        }
        retinajs();
    }

    /**
     * Welcome screen slide down button
     */
    var welcomeScreen = $('#welcome-screen');
    if (welcomeScreen.length) {
        $('.slide-down', welcomeScreen).on('click', function () {
            $('html, body').animate({
                scrollTop: parseFloat(welcomeScreen.height())
            }, 500);
        });
    }

    /**
     * Welcome screen height fix
     */
    function welcomeScreenHeightFix() {
        var info = $('.info', welcomeScreen);
        var height = info.height();
        height += (parseInt(info.css('bottom'), 10) * 2);
        welcomeScreen.css('min-height', height);
    }

    welcomeScreenHeightFix();
    $(window).on('resize', function () {
        welcomeScreenHeightFix();
    });

    /**
     * Email protect from spam robots
     */
    var emails = $('a.mail-hash');
    var emailsLength = emails.length;
    if (emailsLength) {
        for (var emailI = 0; emailsLength > emailI; emailI++) {
            var a = $(emails[emailI]);
            var name = a.data('name');
            var domain = a.data('domain');

            var email = name + '@' + domain;

            a.attr('href', 'mailto:' + email);
            if (a.text() == '') {
                a.text(email);
            }
        }
    }

    /**
     * Initialize contact map
     */
    var mapDiv = document.getElementById('contact-map');
    if (mapDiv !== null) {
        var jMapDiv = $(mapDiv);

        /**
         * Map options
         */
        var lat = parseFloat(jMapDiv.data('lat'));
        var lng = parseFloat(jMapDiv.data('lng'));

        var mapProvider = jMapDiv.data('provider');

        if(isNaN(lat) || !isFinite(lat)){
            lat = 0;
        }
        if(isNaN(lng) || !isFinite(lng)){
            lng = 0;
        }

        /**
         * Initialize google map
         */
        if(mapProvider === "google" && typeof google ){
            var options = {
                scrollwheel: false,
                zoom: 8
            };

            options = $.extend(true, {}, options, jMapDiv.data());

            if (options.lat && options.lng) {
                options.center = {
                    lat: lat,
                    lng: lng
                };

                var map = new google.maps.Map(mapDiv, options);

                /**
                 * Marker options
                 */
                var marker = new google.maps.Marker({
                    position: options.center,
                    map: map
                });
            }
        }
        /**
         * Initialize leaflet maps
         */
        else{
            var zoom = parseFloat(jMapDiv.data('zoom'));
            if(isNaN(zoom) || !isFinite(zoom)){
                zoom = 0;
            }

            var mapApiLink = jMapDiv.data('map-api-link');
            if(!mapApiLink){
                mapApiLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            }

            var map = L.map('contact-map').setView([lat, lng], zoom);


            L.tileLayer(mapApiLink, {
                minZoom: 0,
                maxZoom: 15
            }).addTo(map);

            var marker = L.marker([lat, lng]).addTo(map);
        }
    }

    var contentWrapper = $('.content-wrapper');

    /**
     * Initialize video responsive
     */
    if(typeof $.fn.fitVids != "undefined") {
        contentWrapper.fitVids();
    }

    /**
     * Initlize magnific popup plugin
     */
    if(typeof $.fn.magnificPopup != "undefined") {

        /**
         * Close button fix
         */
        $(document).on('click', '.mfp-close .icon', function () {
            $('.mfp-close').click();
        });

        /**
         * Replace default close button
         */
        $.extend(true, $.magnificPopup.defaults, {
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span class="icon fa fa-times"></span></button>'
        });

        /**
         * Initialize portfolio filter and magnific popup
         */
        var portfolioContainer = $('.portfolio', contentWrapper);
        if (portfolioContainer.length) {
            var filter = $('.filter', portfolioContainer);
            var list = $('.portfolio-list', portfolioContainer);

            $('a', filter).on('click', function (e) {
                e.preventDefault();
                $('a', filter).removeClass('active');
                var type = $(this).addClass('active').data('type');

                if (!type || type == 'all') {
                    $('li', list).removeClass('inactive');
                }
                else {
                    $('li[data-type!=' + type + ']', list).addClass('inactive');
                    $('li[data-type=' + type + ']', list).removeClass('inactive');
                }
            });

            $(document).on('click', '.portfolio-list li.inactive a', function (e) {
                e.preventDefault();
            });
            $(list).magnificPopup({
                delegate: 'li:not(.inactive) a'
            });
        }

        /**
         * Initialize gallery
         */
        var galleries = $('.gallery', contentWrapper);
        var galleryLength = galleries.length;
        for(var galleryI = 0; galleryLength > galleryI; galleryI++) {
            var gallery = $(galleries[galleryI]);

            gallery.magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                preload: [1, 2],
                image: {
                    cursor: 'pointer'
                }
            });
        }
    }

    /**
     * Initialize sticky menu
     */
    if(typeof $.fn.stick_in_parent != "undefined") {

        var initializeStickyMenu = function() {
            var windowWidth = $(window).width();

            var menu = $('.aside-wrapper aside').not('.static');
            var aside = menu.parent();
            if (windowWidth < 768) {
                menu.trigger("sticky_kit:detach");
            } else {
                menu.stick_in_parent().on('sticky_kit:stick', function () {
                    var parent = menu.parent();
                    var width = parseFloat(window.getComputedStyle(parent[0]).width);
                    menu.width(width);
                });
            }
        };

        initializeStickyMenu();
        $(window).on('resize', initializeStickyMenu);
    }

    /**
     * Initialize slick carousels
     */
    if(typeof $.fn.slick != "undefined") {

        /**
         * Initialize testimonial carousel
         */
        $('.testimonial-carousel', contentWrapper).slick({
            arrows: false,
            slidesToShow: 1,
            dots: true,
            rtl: ($('html').attr('dir') == 'rtl')
        });

        /**
         * Initialize clients carousel
         */
        $('.clients-carousel', contentWrapper).slick({
            arrows: false,
            slidesToShow: 3,
            dots: true,
            rtl: ($('html').attr('dir') == 'rtl'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    /**
     * Waypoints and smooth scrolling
     */
    var menuLinks = $('a', '#main-navigation');
    var menuLinksLength = menuLinks.length;
    for (var menuI = 0; menuLinksLength > menuI; menuI++) {

        var link = $(menuLinks[menuI]);
        var href = link.attr('href');

        if (href.charAt(0) == '#') {

            var target = $(href);
            if (target.length == 1) {
                /**
                 * Initialize menu
                 */
                link.on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var target = $($this.attr('href'));
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                });

                /**
                 * Initialize waypoints
                 */
                if(typeof $.fn.waypoint != "undefined") {
                    target.waypoint({
                        offset: '50%',
                        handler: function (direction) {
                            var $this = $(this.element);
                            var menuOption = $('a[href=\\#' + $this.attr('id') + ']');
                            if (direction == 'up') {
                                var li = menuOption.parents('li');
                                menuOption = $('a', li.prev());
                            }
                            menuLinks.removeClass('active');
                            menuOption.addClass('active');
                        }
                    });
                }
            }
        }
    }

    /**
     * Initialize contact form validation and recaptcha
     */
    var contactForm = $('form[name=contact-form]', contentWrapper);

    if (contactForm.length > 0 && typeof $.fn.validate != "undefined") {

        /**
         * Initialize recaptcha
         */
        var reCaptchaMessage = $('.hiddenRecaptcha', contactForm).data('message');
        if(!reCaptchaMessage){
            reCaptchaMessage = "reCaptcha failed";
        }
        if(typeof grecaptcha != "undefined") {
            $.validator.addMethod('reCaptcha', function (value, element, param) {
                if(grecaptcha.getResponse() == '') {
                    return false;
                } else {
                    return true
                }
            }, reCaptchaMessage);
        }

        /**
         * Initialize form validation
         */
        var formValidator = contactForm.validate({
            ignore: '.ignore',
            errorElement: 'div',
            submitHandler: sendContactForm,
            highlight: formFieldHighlight,
            unhighlight: formFieldUnhighlight,
            errorPlacement: formErrorPlacement
        });
    }

    /**
     * Function higlighting invalid form fields
     * @param element
     * @param errorClass
     * @param validClass
     */
    function formFieldHighlight(element, errorClass, validClass) {
        if ($(element).prop('tagName') == "SELECT") {
            var parent = $(element).parents('.custom-select');

            if (parent.length) {
                parent.addClass(errorClass).removeClass(validClass);
            }
            else {
                element.addClass(errorClass).removeClass(validClass);
            }
        }
        else if (element.type === "radio") {
            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }
    }

    /**
     * Function unhighlighting valid form fields
     * @param element
     * @param errorClass
     * @param validClass
     */
    function formFieldUnhighlight(element, errorClass, validClass) {

        if ($(element).prop('tagName') == "SELECT") {
            var parent = $(element).parents('.custom-select');

            if (parent.length) {
                parent.removeClass(errorClass).addClass(validClass);
            }
            else {
                element.removeClass(errorClass).addClass(validClass);
            }
        }
        else if (element.type === "radio") {
            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    }

    /**
     * Function placing error message after invalid form field
     * @param error
     * @param element
     */
    function formErrorPlacement(error, element) {
        var tagName = element.prop('tagName');
        if (tagName == "SELECT") {
            var parent = element.parents('.custom-select');
            if (parent.length) {
                parent.after(error);
            }
            else {
                element.after(error);
            }
        }
        else if (tagName == "INPUT") {
            var type = element.attr('type');
            if (type == 'checkbox' || type == 'radio') {
                var parent = element.parents('.checkbox, .radio');
                if (parent.length) {
                    parent.append(error);
                }
                else {
                    element.append(error);
                }
            }
            else {
                element.after(error);
            }
        }
        else {
            element.after(error);
        }
    }

    /**
     * Sending contact form by ajax
     * @param form
     */
    function sendContactForm(form) {
        var form = $(form);
        var button = $('button', form);

        $('.default', button).fadeOut(1, function () {
            $('.sending', button).fadeIn(1);
            button.attr('disabled', true);
        });

        $.ajax(form.attr('action'), {
            data: $('form[name=contact-form]').serialize(),
            dataType: 'json',
            method: 'POST',

            success: function (response) {

                var message = false;
                var type = false;

                if (response.status == "success") {
                    message = response.message;
                    type = 'success';
                }
                else {
                    if (response.message) {
                        message = response.message;
                        type = 'warning';
                    }
                    else {
                        formValidator.valid();
                        if ("invalidFields" in response && typeof response.invalidFields == "object") {
                            var invalidFields = response.invalidFields;
                            for(var fieldName in invalidFields){
                                if(invalidFields.hasOwnProperty(fieldName)) {
                                    var errors = {};
                                    var errorFieldName = (fieldName == 'recaptcha') ? 'hiddenRecaptcha' : fieldName;
                                    errors[errorFieldName] = invalidFields[fieldName];

                                    formValidator.showErrors(errors);
                                }
                            }
                        }
                    }
                }

                if (message) {
                    showFormMessage(form, message, type);
                }
            },
            error: function () {
                showFormMessage(form, 'Something went wrong, please try again later', 'warning');

            },
            complete: function () {
                $('.sending', button).fadeOut(100, function () {
                    $('.default', button).fadeIn(100);
                    button.removeAttr('disabled');
                });
                if(typeof grecaptcha != "undefined"){
                    grecaptcha.reset();
                }
            }
        });

        /**
         * Show form global message
         * @param form
         * @param message
         * @param type
         */
        function showFormMessage(form, message, type) {
            var row = $('.messages', form.parent());

            if (row.length == 0) {
                row = $('<div>').addClass('col-xs-12 messages');
            }
            else {
                row.html('');
            }

            var alert = $('<div>').addClass('alert alert-' + type).css('display', 'none').html(message);
            row.append(alert);
            form.before(row);

            alert.slideDown(300);

            var offset = form.offset().top;

            $('html, body').animate({
                scrollTop: offset
            }, 500);
        }
    }
});
