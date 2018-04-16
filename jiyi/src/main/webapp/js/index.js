$(document).ready(function () {
    // 点赞按钮
    $('.item-like').click(function () {
        if ($(this).css("color") !== 'rgb(255, 0, 0)') {
            $(this).css("color", "red");
        } else {
            $(this).css("color", "#d2d2d2");
        }
    });

    // 首页导航按钮
    $('.index-nav-item').click(function (e) {
        e.preventDefault();
        if ($(this).css("color") !== 'rgb(171, 204, 202)') {
            $('.index-nav-item').css("color", "#101010");
            $(this).css("color", "#abccca");
        } else {
            $(this).css("color", "#101010");
        }
    });

    $('.message-nav a').click(function () {
        if ($(this).css("background-color") !== 'rgb(240, 127, 127)') {
            $('.message-nav a').css("background-color", 'transparent');
            $('.message-nav a').css("color", 'rgb(16, 16, 16)');
            $(this).css("background-color", 'rgb(240, 127, 127)');
            $(this).css("color", 'white');
        } else {
        }
    });

    $('.user-nav a').click(function () {
        if ($(this).css("background-color") !== 'rgb(240, 127, 127)') {
            $('.user-nav a').css("background-color", 'transparent');
            $('.user-nav a').css("color", 'rgb(16, 16, 16)');
            $(this).css("background-color", 'rgb(240, 127, 127)');
            $(this).css("color", 'white');
        } else {
        }
    });

    // 搜索页面导航
    $('.skills-cate a').click(function () {
        if ($(this).css("color") !== 'rgb(240, 127, 127)') {
            $('.skills-cate a').css("color", '#101010');
            $(this).css("color", 'rgb(240, 127, 127)');
        } else {
        }
    });
    $('.skills-filter a').click(function () {
        if ($(this).css("color") !== '#101010') {
            console.log($(this).css("color"));
            $('.skills-filter a').css("color", 'rgb(187, 187, 187)');
            $(this).css("color", '#101010');
        } else {
        }
    });


    $('.user-header-nav a').click(function () {
        $('.user-header-nav a').css("border-bottom", 'none');
        $(this).css("border-bottom", '2px solid #f07f7f');
    });

    $('.require').blur(function () {
        console.log("leave");
        if ($(this).val() !== null && $(this).val().trim() !== '') {
            $(this).css('border-color', '#9dc8ee');
            $(this).siblings('.skill-edit-input-icon').css('display', 'inline');
            $(this).siblings('.skill-edit-info').css('display', 'none');
        } else {
            $(this).css('border-color', '#f07f7f');
            $(this).siblings('.skill-edit-input-icon').css('display', 'none');
            $(this).siblings('.skill-edit-info').css('display', 'block');
        }
    });


    /*
        技能详情页面
            为他实名
            二级导航
     */

    // 为他实名
    $('#post-call-first').click(function () {
        $(this).css('display', 'none');
        $('#post-call-second').css('display', 'inline-block');
    });
    $('#post-call-second').click(function () {
        $(this).css('display', 'none');
        $('#post-call-first').css('display', 'inline-block');
    });
    // hover名片
    // $('.post-heads span').hover(function () {
    //     if ($(this).siblings('div').length === 0) {
    //         console.log("yes:" + $(this).siblings('div').length);
    //         var card =
    //             '<div class="post-heads-card" style="position: absolute; z-index: 2">' +
    //             '<img src="../images/stupid.jpg" />' +
    //             '</div>';
    //         var $panel = $(card);
    //         $(this).parent().append($panel);
    //     }
    // }, function () {
    //     console.log("blur");
    //     $(this).siblings('div').remove();
    // });
    if ($('.post-heads img').length > 7) {
        $('#post-heads-more').css('display', 'inline');
    }

    // 二级导航
    $('.post-sub1').click(function () {
        $(this).css('color', 'white');
        $(this).css('background-color', '#f07f7f');
        $('.post-sub2').css('color', 'black');
        $('.post-sub2').css('background-color', 'transparent');
    });
    $('.post-sub2').click(function () {
        $(this).css('color', 'white');
        $(this).css('background-color', '#f07f7f');
        $('.post-sub1').css('color', 'black');
        $('.post-sub1').css('background-color', 'transparent');
    });

});