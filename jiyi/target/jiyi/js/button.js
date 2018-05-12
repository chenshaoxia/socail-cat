$(document).ready(function () {
    $('.skill-edit-input-pic input').change(function () {
        var arrs=$(this).val().split('\\');
        var filename=arrs[arrs.length-1];
        $(".skill-edit-input-content").html(filename);
    });
});