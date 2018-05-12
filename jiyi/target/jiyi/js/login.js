$(document).ready(function () {
    // 验证必填字段
    $('form input').blur(function () {
        console.log($(this).val().trim() === '');
        if ($(this).val() === '') {
            $(this).siblings('.form-require').css("display", "block");
        } else {
            $(this).siblings('.form-require').css("display", "none");
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
});