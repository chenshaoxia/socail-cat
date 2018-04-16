
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
        } else  {
            $(this).css("color", "#101010");
        }
    });

    // 验证必填字段
    $('form input').blur(function () {
        console.log($(this).val().trim() === '');
        if ($(this).val() === '') {
            $(this).siblings('.form-require').css("display", "block");
        } else {
            $(this).siblings('.form-require').css("display", "none");
            // if ($(this) === $('#login-password')) {
            //     if ($(this).val().trim().length < 6 ) {
            //         $('#form-password').css("display", "block");
            //     }
            // }
        }
        $(this).val()
    });

    // 验证密码强度
    $('#login-password').blur(function () {
        if ($(this).val().trim().length < 6 && $(this).val().trim() !== '') {
            $('#form-password').css("display", "block");
        } else {
            $('#form-password').css("display", "none");
        }
    });

    // 验证重复密码
    $('#login-repassword').blur(function () {
        if ($(this).val() !== $('#login-password').val()) {
            $('#form-repassword').css("display", "block");
            // $(this).siblings('#form-repassword').css("display", "block");
        } else {
            $('#form-repassword').css("display", "none");
        }
    });

    // 验证邮箱
    $('#login-email').blur(function () {
        var reg = /\w+[@]{1}\w+[.]\w+/;
        var email = $("#login-email").val();
        if (!reg.test(email) && email.trim() !== '') {
            $('#form-email').css("display", "block");
            // $(this).siblings('#form-repassword').css("display", "block");
        } else {
            $('#form-email').css("display", "none");
        }
    });

    // 验证手机
    $('#login-tel').blur(function () {
        var reg = /^1[34578]\d{9}$/;
        var tel = $("#login-tel").val();
        if (!reg.test(tel) && tel.trim() !== '') {
            $('#form-tel').css("display", "block");
            // $(this).siblings('#form-repassword').css("display", "block");
        } else {
            $('#form-tel').css("display", "none");
        }
    });

    $('.message-nav a').click(function () {
        if ($(this).css("background-color") !== 'rgb(240, 127, 127)') {
            $('.message-nav a').css("background-color", 'transparent');
            $('.message-nav a').css("color", 'rgb(16, 16, 16)');
            $(this).css("background-color", 'rgb(240, 127, 127)');
            $(this).css("color", 'white');
        } else {}
    });

    $('.user-nav a').click(function () {
        if ($(this).css("background-color") !== 'rgb(240, 127, 127)') {
            $('.user-nav a').css("background-color", 'transparent');
            $('.user-nav a').css("color", 'rgb(16, 16, 16)');
            $(this).css("background-color", 'rgb(240, 127, 127)');
            $(this).css("color", 'white');
        } else {}
    });

    // 搜索页面导航
    $('.skills-cate a').click(function () {
        if ($(this).css("color") !== 'rgb(240, 127, 127)') {
            $('.skills-cate a').css("color", '#101010');
            $(this).css("color", 'rgb(240, 127, 127)');
        } else {}
    });
    $('.skills-filter a').click(function () {
        if ($(this).css("color") !== '#101010') {
            console.log($(this).css("color"));
            $('.skills-filter a').css("color", 'rgb(187, 187, 187)');
            $(this).css("color", '#101010');
        } else {}
    });

});