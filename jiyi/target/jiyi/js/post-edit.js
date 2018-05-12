
// 技能贴编辑表单
$('#skill-edit-law').click(function () {
    var btn = $('#skill-submit-btn');
    if ($(this).prop("checked") === true) {
        if (validateForm() === false) {
            setBtn(btn, true, "#d2d2d2")
        } else if (validateForm() === true) {
            setBtn(btn, false, "#f07f7f")
        }
    } else {
        setBtn(btn, true, "#d2d2d2");
    }
});

$('.skill-edit-input-pic input').change(function () {
    console.log("input change");
    console.log("this" + $(this).val());
    var arrs = $(this).val().split('\\');
    console.log(arrs);
    var filename = arrs[arrs.length - 1];
    // $(this).siblings()$('.skill-edit-input-content').html(filename);;
    $(this).siblings('.skill-edit-input-content').html(filename);
});

// 验证技能贴表单
function validateForm() {
    var canSubmit = 0;
    $('.skill-edit-input-icon').each(function () {
        if ($(this).css('display') === 'none') {
            canSubmit++;
            return false;
        }
    });
    if (canSubmit === 0) {
        return true;
    }
}

// 设置按钮是否可用
function setBtn(btn, disabled, color) {
    btn.attr("disabled", disabled);
    btn.css("background-color", color);
}
