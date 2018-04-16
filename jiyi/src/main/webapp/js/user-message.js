$(document).ready(function () {

    $('#user-message-description').change(function () {
        if ($(this).val().trim().length > 17) {
            $(this).siblings('.user-message-validate').css('display', 'block');
        } else {
            $(this).siblings('.user-message-validate').css('display', 'none');
        }
    });

    // 用户个人信息界面的修改
    $('.user-message-edit-btn').click(function () {
        if ($(this).siblings('input').attr('disabled') !== false && $(this).siblings('input').attr('disabled') !== undefined) {
            $(this).text("取消");
            $(this).siblings('input').attr('disabled', false);
            // $(this).siblings('input').css('border', '1px solid grey');
            $(this).siblings('input').css('background-color', 'white');
        } else {
            $(this).text("修改");
            $(this).siblings('input').attr('disabled', true);
            // $(this).siblings('input').css('border', '1px solid transparent');
            $(this).siblings('input').css('background-color', 'transparent');
            $(this).siblings('input').val('');
        }
    });
    $('.user-message-head-btn').click(function () {
        if ($(this).siblings('input').attr('disabled') !== false && $(this).siblings('input').attr('disabled') !== undefined) {
            $(this).children().addClass("fa-times-circle");
            $(this).siblings('input').attr('disabled', false);
            $(this).siblings('input').css('background-color', 'white');
        } else {
            $(this).children().removeClass("fa-times-circle");
            $(this).siblings('input').attr('disabled', true);
            $(this).siblings('input').css('background-color', 'transparent');
            $(this).siblings('input').val('');
            $(this).siblings('.user-message-validate').css('display', 'none');
        }
    });
});