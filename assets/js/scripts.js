/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    
    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        
        if ($('.side-menu').hasClass('.show')) {
            $('.side-menu').removeClass('show');
            $('.menu-overlay').fadeOut();
        } else {
            $('.side-menu').addClass('show');
            $('.menu-overlay').fadeIn();
        }

        $('.menu-overlay').on('click', function (e) {
            $('.side-menu').removeClass('show');
            $('.menu-overlay').fadeOut();
        });
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });

    //data-tab="#profile"
    $('.modal-toggle').on('click', function (e) {
        var tab = e.currentTarget.hash;
        console.log(tab);
        // $('.nav-tabs li > a[href="' + tab + '"]').tab("show");

        $('.login-register').on('show.bs.modal', function (e) {
            // $('#home').tab('dispose');
            $(tab).tab("show");

        });
    });

    // has-story
    $('.has-story').on('click', function (e) {
        e.preventDefault();
        $('.story').fadeIn('slow');

        $('.close-story').on('click', function (e) {
            e.preventDefault();
            $('.story').fadeOut('slow');
        });
    });

    $('.reactions-single a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
    });

    // Comments Add comment
    $("[name=add-comment]").click(function (e) {
        e.preventDefault();
        var pos = $("[name=comment-text]").val();
        var apend = '<li><div class="comment-main-level" ><div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div> <div class="comment-box"> <div class="comment-head"> <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">محمد حسن</a></h6> <span>منذ دقيقة</span> </div> <div class="comment-content"> ' + pos + ' </div> </div> </div> </li >';
        $(apend).appendTo("#comments-list");
        $("[name=comment-text]").val("");
        $("[name=add-comment]").addClass('disabled');
        $("[name=add-comment]").attr('disabled', true);
    });

    $("[name=comment-text]").keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var pstLength = $(this).val().length;
        var charactersLeft = 140 - pstLength;

        if (keycode == "13" && charactersLeft > 0) {
            var pos = $("[name=comment-text]").val();
            var apend = '<li><div class="comment-main-level" ><div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div> <div class="comment-box"> <div class="comment-head"> <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">محمد حسن</a></h6> <span>منذ دقيقة</span> </div> <div class="comment-content"> ' + pos + ' </div> </div> </div> </li >';
            $(apend).appendTo("#comments-list");
            $("[name=comment-text]").val("");
        }
        $("[name=add-comment]").addClass('disabled');
        $("[name=add-comment]").attr('disabled', true);
    });

    $("[name=comment-text]").keyup(function () {
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);

        if (charactersLeft < 0) {
            $("[name=add-comment]").addClass('disabled');
            $("[name=add-comment]").attr('disabled', true);
        }
        else if (charactersLeft == 140) {
            $("[name=add-comment]").addClass('disabled');
            $("[name=add-comment]").attr('disabled', true);
        }
        else {
            $("[name=add-comment]").removeClass('disabled');
            $("[name=add-comment]").attr('disabled', false);
        }
    });
    $("[name=add-comment]").addClass('disabled');
    $("[name=add-comment]").attr('disabled', true);
    // Comments Add comment

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (var i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (var i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "شكراً لك، تقييمك هو " + ratingValue + " stars.";
        }
        else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);

    });

    $('.drop-item > a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).parent().find('.custom-drop-menu');
        if (target.hasClass('show')) {
            target.removeClass('show');
        } else {
            target.addClass('show');
        }
        
    });

    $('body, html').on('click', function (e) {
        $('.custom-drop-menu').removeClass('show');
    });

    $('.custom-drop-menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $('.faved-icon').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut(function () {
            $(this).remove();
        });
    });
});

function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}

// upload file

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
