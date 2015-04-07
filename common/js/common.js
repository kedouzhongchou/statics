$(".orderCancelBtn").click(function(e){
    $.ajax({
        url: '/orders/' + $(e.target).data('id'),
        type: 'DELETE',
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
});

$("#unfollowBtn").click(function(){
    $("#unfollowForm").submit();
});
$("#unfollowForm").submit(function(e){
    $.ajax({
        url: e.target.action,
        type: 'DELETE',
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
    e.preventDefault();
});

$("#unfollowProjectBtn").click(function(){
    $("#unfollowProjectForm").submit();
});
$("#unfollowProjectForm").submit(function(e){
    $.ajax({
        url: e.target.action,
        type: 'DELETE',
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
    e.preventDefault();
});

$("#followBtn").click(function(){
    $("#followForm").submit();
});

$("#avatarBtn").click(function (e) {
    $("#avatarFile").click();
    e.preventDefault();
});
$("#avatarFile").change(function () {
    $("#avatarForm").submit();
});
// $("#avatarForm").submit(function (e) {
//     $.ajax({
//         url: e.target.action,
//         type: e.target.method,
//         // data: new FormData(this),
//         files: $(":file", this),
//         iframe: true,
//         processData: false,
//         contentType: false,
//         success: function (data) {
//             console.log();
//             $('#userAvatar').attr('src', $.parseJSON($(data).text()).file);
//         }
//     });
//     e.preventDefault();
// });



$("#loginForm").submit(function (e) {
    e.preventDefault();
    var message = '';
    if ($('[name="username"]').val() == '') {
        message = "用户名不能为空";
    } else if ($('[name="password"]').val() == '') {
        message = "密码不能为空";
    }
    if (message == '') {
        e.target.submit();
    } else {
        $("#messageSpan").text(message);
    }

});


$("#logout").click(function (e) {
    e.preventDefault();
    $.ajax({
        url: '/session',
        type: 'DELETE',
        success: function () {
            window.location = '/';
        }
    });
});
